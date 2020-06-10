import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


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
                    <Drawer.Screen name="Menu" component={MenuNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
  }
}
  
export default Main;