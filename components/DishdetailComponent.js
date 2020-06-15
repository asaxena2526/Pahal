import React,{Component} from 'react';
import { Text, View, ScrollView,FlatList,Modal, Button, StyleSheet } from 'react-native';
import { Card,Icon,Input,Rating } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {postFavorite,postComment} from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      favorites: state.favorites
    }
  }

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment))
})
        


function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={{uri:baseUrl+dish.image}}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                        <Icon
                            raised
                            reverse
                            name={props.favorite?'heart':'heart-o'}
                            type='font-awesome'
                            color='#f00'
                            onPress={()=>props.favorite? console.log('Already Favorite'): props.onPress(1)}/>
                        <Icon
                            raised
                            reverse
                            name='pencil'
                            type='font-awesome'
                            color='#512DA8'
                            onPress={()=>props.onPress(2)}/>
                    </View>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function RenderComments(props){
    const comments = props.comments;

    const renderCommentItem = ({item,index})=>{
        return(
            <View key={index} style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.comment}</Text>
                <View style={{flexDirection:'row'}}>
                    <Rating imageSize={10} readonly startingValue={item.rating} style={{marginRight:5}}/>
                    <Text style={{fontSize:12}}>{'--' + item.author +', ' +item.date }</Text>
                </View>
            </View>
        );
    };
    return(
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item=>item.id.toString()}/>
        </Card>
    );
}

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            rating:3,
            author:'',
            comment:'',
            isModalOpen:false
        }
    }
    
    ratingCompleted(rating) {
        console.log('Rating is: '+ rating)
        this.setState({
            rating:rating
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    resetForm(){
        this.setState({
            rating:0,
            author:'',
            comment:''
        })
    }
    handleSubmission(dishId){
        console.log(JSON.stringify(this.state));
        this.toggleModal();
        this.resetForm();
        this.props.postComment(dishId,this.state.rating,this.state.author,this.state.comment);

    }
    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    render() {
        const {dishId} = this.props.route.params;
        console.log(this.props.favorites);
        return(
            
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={(type)=>{
                        if (type===1)
                            this.markFavorite(dishId);
                        else
                            this.toggleModal();
                        }} />
                <RenderComments comments={this.props.comments.comments.filter((comments)=>comments.dishId==dishId)}/>
                <Modal
                animationType='slide'
                visible={this.state.isModalOpen}
                transparent={false}
                onDismiss={()=>{this.toggleModal(); this.resetForm()}}
                onRequestClose={()=>{this.toggleModal(); this.resetForm()}}
                >
                    <View style={styles.modal}>
                        <View style={styles.formRow}>
                            <Rating
                                showRating
                                type='star'
                                ratingCount={5}
                                imageSize={40}
                                onFinishRating={(rating)=>this.ratingCompleted(rating)}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Input
                                placeholder="Author"
                                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                onChangeText={value => this.setState({ author: value })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Input
                                placeholder="Comment"
                                leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                                onChangeText={value => this.setState({ comment: value })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Button 
                            onPress={()=>this.handleSubmission(dishId)}
                            color="#512DA8"
                            title="SUBMIT"/>
                        </View>
                        <View style={styles.formRow}>
                            <Button
                            onPress={()=>{this.toggleModal(); this.resetForm()}}
                            color="gray"
                            title="CANCEL"/>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    modal:{
        justifyContent:'center',
        margin:20
    },
    formRow:{
        margin: 10
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);