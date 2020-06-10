import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { DISHES } from '../shared/dishes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const MenuNavigator = createStackNavigator();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }
  render() {
 
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <NavigationContainer>
                <MenuNavigator.Navigator initialRouteName='Menu'
                    screenOptions= {{
                        headerStyle: {
                            backgroundColor: "#512DA8"
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}>
                    <MenuNavigator.Screen name="Menu" component={Menu} />
                    <MenuNavigator.Screen name="Dishdetail" component={DishDetail} />
                </MenuNavigator.Navigator>
            </NavigationContainer>
        </View>
    );
  }
}
  
export default Main;