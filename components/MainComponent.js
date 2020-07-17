import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Reservation from './ReservationComponent';
import Login from './LoginComponent';
import Favorites from './FavoritesComponent';
import Subjects from './SubjectComponent';
import Topics from './ChemistryComponent';
import Reactions from './ReactionsComponent';
import { View, Platform, ScrollView,Image,StyleSheet ,Text, ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import NetInfo from "@react-native-community/netinfo";
import About from './AboutComponent';
import Contact from './ContactComponent';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchComments,fetchLeaders,fetchPromos,fetchDishes} from '../redux/ActionCreators';
import Quizzes from './QuizzesComponent';
import Bio from './BiologyComponent';


const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispatchToProps = dispatch => ({
    fetchComments: ()=>dispatch(fetchComments()),
    fetchDishes: ()=>dispatch(fetchDishes()),
    fetchLeaders: ()=>dispatch(fetchLeaders()),
    fetchPromos: ()=>dispatch(fetchPromos())
});


const MenuNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Menu'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Menu" component={Menu}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'white'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
            <Nav.Screen name="Dishdetail" component={DishDetail} />
        </Nav.Navigator>
    );

}

const HomeNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Home'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Home" component={Home}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'black'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
        </Nav.Navigator>
    );
}
const AboutNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='About Us'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="About Us" component={About} 
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'black'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }}/>
        </Nav.Navigator>
    );

}
const ContactNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Contact Us'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Contact Us" component={Contact}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'white'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
        </Nav.Navigator>
    );

}
const SubjectNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Subjects'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Subjects" component={Subjects}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'black'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
            <Nav.Screen name="Chemistry" component={Topics} />
            <Nav.Screen name="Organic Reactions" component={Reactions} />
        </Nav.Navigator>
    );

}
const QuizNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Quizzes'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Quizzes" component={Quizzes}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'black'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
            <Nav.Screen name="Biology Quizzes" component={Bio} />
            <Nav.Screen name="Full Course" component={Reactions} />
        </Nav.Navigator>
    );

}

const ReserveNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Reserve Table'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Reserve Table" component={Reservation}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'white'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
        </Nav.Navigator>
    );

}

const FavoritesNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='My Favorites'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="My Favorites" component={Favorites}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'white'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
        </Nav.Navigator>
    );
}
const LoginNavigator = ({navigation})=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Account'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#e1ad01"
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    color: "black"
                }
            }}>
            <Nav.Screen name="Account" component={Login}
                options={{
                    headerLeft: ()=>(<Icon name="menu" size={24} 
                    color= 'white'
                    onPress={ () => 
                        navigation.toggleDrawer() } />)
                }} />
        </Nav.Navigator>
    );

}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Pahal</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>
    </ScrollView>
);

const Drawer = createDrawerNavigator();

class Main extends Component {

    

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        NetInfo.fetch()
            .then((connectionInfo)=> {
                ToastAndroid.show('Initial Network Connectivity Type: '
                + connectionInfo.type,
                ToastAndroid.LONG)
            });
        
        window.value=NetInfo.addEventListener((connectionInfo)=>this.handleConnectivityChange(connectionInfo)) ; 
    }
    componentWillUnmount(){
        window.value();
    }
    

    handleConnectivityChange = (connectionInfo)=>{
        switch (connectionInfo.type){
            case 'none':
                ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
                break;
            case 'wifi':
                ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
                break;
            case 'cellular':
                ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
                break;
            case 'unknown':
                ToastAndroid.show('You are now have an unknown connection!', ToastAndroid.LONG);
                break;
            default:
                break;
        }
    }
    render() {
 
        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home" 
                        drawerStyle={{
                            backgroundColor: 'white'
                        }}
                        drawerContent={CustomDrawerContentComponent}
                    >
                        <Drawer.Screen name="Login" component={LoginNavigator}
                            options={{ 
                            drawerIcon: ({ tintColor, focused }) => (
                                <Icon
                                name='sign-in'
                                type='font-awesome'            
                                size={25}
                                color={tintColor}
                                />
                            )}}/>
                        <Drawer.Screen name="Home" component={HomeNavigator}
                            options={{ 
                            drawerIcon: ({ tintColor, focused }) => (
                                <Icon
                                name='home'
                                type='font-awesome'            
                                size={25}
                                color={tintColor}
                                />
                            )}}/>
                            <Drawer.Screen name="Subjects" component={SubjectNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='book'
                                    type='font-awesome'            
                                    size={22}
                                    color={tintColor}
                                    />
                                )}} />
                            <Drawer.Screen name="Quizzes" component={QuizNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='question'
                                    type='font-awesome'            
                                    size={22}
                                    color={tintColor}
                                    />
                                )}} />
                            <Drawer.Screen name="Contact Us" component={ContactNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='address-card'
                                    type='font-awesome'            
                                    size={22}
                                    color={tintColor}
                                    />
                                )}} />
                        <Drawer.Screen name="About Us" component={AboutNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='info-circle'
                                    type='font-awesome'            
                                    size={27}
                                    color={tintColor}
                                    />
                                )}} />
                        {/* <Drawer.Screen name="Menu" component={MenuNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='list'
                                    type='font-awesome'            
                                    size={24}
                                    color={tintColor}
                                    />
                                )}} /> */}
                        {/* <Drawer.Screen name="My Favorites" component={FavoritesNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='heart'
                                    type='font-awesome'            
                                    size={22}
                                    color={tintColor}
                                    />
                                )}} />
                        <Drawer.Screen name="Reserve Table" component={ReserveNavigator}
                            options={{ 
                                drawerIcon: ({ tintColor, focused }) => (
                                    <Icon
                                    name='cutlery'
                                    type='font-awesome'            
                                    size={22}
                                    color={tintColor}
                                    />
                                )}} /> */}
                        
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#e1ad01',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft:10
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);