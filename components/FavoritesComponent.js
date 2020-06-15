import React,{Component} from 'react';
import { View, FlatList,Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import {connect} from 'react-redux';
import {deleteFavorite} from '../redux/ActionCreators';
import {baseUrl} from '../shared/baseUrl';
import {Loading} from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        favorites: state.favorites
    };
}

const mapDispatchToProps= dispatch => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

class Favorites extends Component {

    render(){
        const {navigate} = this.props.navigation;
        const createTwoButtonAlert = (dishId,name) =>
            Alert.alert(
            'Remove Favorite',
            'Are you sure you want to remove '+ name + ' from your favorites?',
            [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "OK", onPress: () => this.props.deleteFavorite(dishId) }
            ],
            { cancelable: false }
        );
        const renderFavorites = ({item,index})=>{
            const dish = this.props.dishes.dishes[+item]
            const deleteButton = [{
                text:'Delete',
                type:'delete',
                onPress:() => createTwoButtonAlert(dish.id,dish.name)
            }]
            return(
                <Animatable.View animation="fadeInRightBig" duration={2000} delay={1000}>
                    <Swipeout right={deleteButton} autoClose={true}>
                        <ListItem
                            key={index}
                            title={dish.name}
                            subtitle={dish.description}
                            hideChevron={true}
                            onPress={() => navigate('Dishdetail', { dishId: dish.id })}
                            leftAvatar={{ source: {uri: baseUrl + dish.image}}}
                            />
                    </Swipeout>
                </Animatable.View>
            );
        }
        if (this.props.dishes.isLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <View>            
                    <Text>{props.dishes.errMess}</Text>
                </View>            
            );
        }
        else{
            return(
                <View>
                    <FlatList 
                        data={this.props.favorites}
                        renderItem={renderFavorites}
                        keyExtractor={item => this.props.dishes.dishes[+item].id.toString()}
                    />
                </View>
                
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);