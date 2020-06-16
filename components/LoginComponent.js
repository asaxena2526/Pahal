import React,{Component} from 'react';
import {View,StyleSheet, Text,ScrollView } from 'react-native';
import {Icon,Input,CheckBox,Button,Image} from 'react-native-elements';
import  * as SecureStore from 'expo-secure-store';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { baseUrl } from '../shared/baseUrl';

class LoginTab extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: false
        }

    }

    componentDidMount(){
        SecureStore.getItemAsync('userinfo')
            .then((userdata)=>{
                let userinfo = JSON.parse(userdata);
                if (userinfo){
                    console.log(userinfo);
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true})
                }
            })
    }
    handleLogin(){
        console.log(JSON.stringify(this.state));
        if(this.state.remember){

            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({username:this.state.username,password:this.state.password})
            )
            .then(()=>console.log("Remember"))
            .catch((error)=>console.log('Could not save user info ',error));

        }
        else{
            SecureStore.deleteItemAsync('userinfo')
                .then(()=>console.log("deleted"))
                .catch((error)=>console.log('Could not save user info ',error));

                this.setState({ username: '', password: '', remember:false });
        }
        

    }
    render(){
        return(
            <View style={styles.container}>
            <Input
                placeholder="Username"
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                containerStyle={styles.formInput}
                />
            <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                containerStyle={styles.formInput}
                secureTextEntry={true}
                />
            <CheckBox title="Remember Me"
                checked={this.state.remember}
                onPress={() => this.setState({remember: !this.state.remember})}
                containerStyle={styles.formCheckbox}
                />
            <View style={styles.formButton}>
                <Button
                    onPress={() => this.handleLogin()}
                    title="Login"
                    icon={
                        <Icon
                            name='sign-in'
                            type='font-awesome'            
                            size={24}
                            style={{marginRight:4}}
                            color= 'white'
                        />
                    }
                    buttonStyle={{
                        backgroundColor: "#512DA8"
                    }}
                    />
            </View>
            <View style={styles.formButton}>
                <Button
                    onPress={() => this.props.navigation.navigate('Register')}
                    title="Register"
                    type="clear"
                    icon={
                        <Icon
                            name='user-plus'
                            type='font-awesome'            
                            size={24}
                            style={{marginRight:4}}
                            color= '#512DA8'
                        />
                    }
                    titleStyle={{
                        color:'#512DA8'
                    }}
                    buttonStyle={{
                        marginTop:30
                    }}
                    />
            </View>
        </View>
        );
    }
}

class RegistrationTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
            imageUrl: baseUrl + 'images/logo.png'
            
        }
    }
    getImageFromCamera = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if(cameraPermission.status ==='granted' && cameraRollPermission.status == 'granted'){
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing:true,
                aspect:[4,3]
            });

            if(!capturedImage.cancelled){
                this.setState({imageUrl:capturedImage.uri})
            }
        }
    }
    handleRegister(){
        console.log(JSON.stringify(this.state));
        if (this.state.remember){
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({username:this.state.username,password:this.state.password})
            )
            .then(()=>console.log("Remember"))
            .catch((error)=>console.log('Could not save user info ',error));
        }
        this.setState({
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
            imageUrl: baseUrl + 'images/logo.png'
        });
        
    }

    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: this.state.imageUrl}} 
                        loadingIndicatorSource={require('./images/logo.png')}
                        style={styles.image} 
                        />
                    <Button
                        title="Camera"
                        onPress={this.getImageFromCamera}
                        />
                </View>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    secureTextEntry={true}
                    />
                <Input
                    placeholder="First Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({firstname})}
                    value={this.state.firstname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({lastname})}
                    value={this.state.lastname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    containerStyle={styles.formInput}
                    />
                <CheckBox title="Remember Me"
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                    />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleRegister()}
                        title="Register"
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'            
                                size={24}
                                style={{marginRight:4}}
                                color= 'white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#512DA8"
                        }}
                        />
                </View>
            </View>
            </ScrollView>
        );
    }

}

const Tab = createBottomTabNavigator();


class Login extends Component {

    render(){
        return (
        // <NavigationContainer independent>
            <Tab.Navigator initialRouteName= "Login"  tabBarOptions={{
                activeBackgroundColor: '#9575CD',
                inactiveBackgroundColor: '#D1C4E9',
                activeTintColor: '#ffffff',
                inactiveTintColor: 'gray',
                labelPosition:'beside-icon',
                keyboardHidesTabBar:true
              }}
              >
            <Tab.Screen name="Login" component={LoginTab}
            options={{
                tabBarLabel:'Login',
                tabBarIcon:({color})=>(<Icon name='sign-in' type='font-awesome' size={20}  color={color}/>)
            }} />
            <Tab.Screen name="Register" component={RegistrationTab}
            options={{
                tabBarLabel:'Register',
                tabBarIcon:({color})=>(<Icon name='user-plus' type='font-awesome' size={20}  color={color}/>)
            }} />
            </Tab.Navigator>
        // </NavigationContainer>
        );
    }
  }
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        margin:20
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    image: {
      margin: 10,
      width: 80,
      height: 60
    },
    formInput:{
        margin:0
    },
    formCheckbox:{
        margin:10,
        backgroundColor:null
    },
    formButton: {
        margin:10
    }
});


export default Login;