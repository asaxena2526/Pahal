import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './AboutComponent';
import Contact from './ContactComponent';


const MenuNavigator = ()=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Menu'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Nav.Screen name="Menu" component={Menu} />
            <Nav.Screen name="Dishdetail" component={DishDetail} />
        </Nav.Navigator>
    );

}

const HomeNavigator = ()=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Home'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Nav.Screen name="Home" component={Home} />
        </Nav.Navigator>
    );
}
const AboutNavigator = ()=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='About Us'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Nav.Screen name="About Us" component={About} />
        </Nav.Navigator>
    );

}
const ContactNavigator = ()=>{ 
    const Nav=createStackNavigator();
    return(
        <Nav.Navigator initialRouteName='Contact Us'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Nav.Screen name="Contact Us" component={Contact} />
        </Nav.Navigator>
    );

}

const Drawer = createDrawerNavigator();

class Main extends Component {
  
  render() {
 
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" 
                    drawerStyle={{
                        backgroundColor: '#D1C4E9'
                      }}
                >
                    <Drawer.Screen name="Home" component={HomeNavigator} />
                    <Drawer.Screen name="About Us" component={AboutNavigator} />
                    <Drawer.Screen name="Menu" component={MenuNavigator} />
                    <Drawer.Screen name="Contact Us" component={ContactNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
  }
}
  
export default Main;