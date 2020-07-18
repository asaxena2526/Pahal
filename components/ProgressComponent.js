import React,{Component} from 'react';
import {StyleSheet, View, FlatList,Alert,Text,TouchableOpacity} from 'react-native';
import {Icon,Card,ListItem} from 'react-native-elements';
import {STUDENTS} from '../shared/students';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Class(props){
    return(
        <View>
        </View>
    );
}

function Individual(props){
    const { buttonStyle, textStyle } = styles;
    const renderStudents = ({item, index}) => {

        return (
            <TouchableOpacity style={buttonStyle}>

                <Text style={textStyle}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <FlatList
            data={STUDENTS}
            renderItem={renderStudents}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();


class Progress extends Component {

    render(){
        return (
        // <NavigationContainer independent>
            <Tab.Navigator initialRouteName= "Class"  tabBarOptions={{
                activeBackgroundColor: '#e1ad01',
                inactiveBackgroundColor: '#fada5f',
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                labelPosition:'beside-icon',
                keyboardHidesTabBar:true
              }}
              >
            <Tab.Screen name="Class" component={Class}
            options={{
                tabBarLabel:'Class',
                tabBarIcon:({color})=>(<Icon name='users' type='font-awesome' size={20}  color={color}/>)
            }} />
            <Tab.Screen name="Individual" component={Individual}
            options={{
                tabBarLabel:'Individual',
                tabBarIcon:({color})=>(<Icon name='user' type='font-awesome' size={20}  color={color}/>)
            }} />
            </Tab.Navigator>
        // </NavigationContainer>
        );
    }
  }


const styles = {
    textStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#e1ad01',
      paddingTop: 4,
      paddingBottom: 4,
      paddingRight: 25,
      paddingLeft: 25,
      marginTop: 10
    }
  };


export default Progress;