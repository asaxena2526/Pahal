import React, {Component} from 'react';
import {Text,View,StyleSheet,Picker,Switch,Button,Modal,Alert,Platform} from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';


class Reservation extends Component{

    constructor(props){
        super(props);

        this.state={
            guests: 1,
            smokingArea: false,
            date: ''
        }
    }

    resetForm(){
        this.setState({
            guests: 1,
            smokingArea: false,
            date: ''
        })
    }

    async obtainNotificationPermission(){
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS)
        if (permission.status!=='granted') {
            permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS)
            if(permission.status !== 'granted') {
                Alert.alert('Permission not granted to show notification')
            }

        }
        return permission;
    }

    async presentLocalNotification(date){
        await this.obtainNotificationPermission();
        Notifications.presentLocalNotificationAsync({
            title:'Your Reservation',
            body: 'Reservation for '+date+' requested',
            ios: {
                sound:true
            },
            android: {
                channelId: 'reservation',
                color: "#512DA8"
            }
        })
    }
    render(){
        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('reservation', {
              name: 'Confusion',
              sound: true,
              vibrate: [0, 250, 250, 250],
              priority: 'max',
            });
          }
        const reservationAlert = () =>
            Alert.alert(
            'Your Reservation OK?',
            'Number of Guest: '+ this.state.guests +'\n'+
            'Smoking Area? '+ this.state.smokingArea+'\n'+
            'Date and Time: '+this.state.date,
            [
                {
                text: "Cancel",
                onPress: () => { this.resetForm(); console.log("Cancel Pressed")},
                style: "cancel"
                },
                { text: "OK", onPress: () => { 
                    this.presentLocalNotification(this.state.date);
                    this.resetForm(); 
                    console.log("OK Pressed")} }
            ],
            { cancelable: false }
        );
        return(
            <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Guests</Text>
                    <Picker style={styles.formInput}
                        selectedValue={this.state.guests}
                        onValueChange={(value,index)=>this.setState({guests:value})}
                    >
                        <Picker.Item label='1' value='1'/>
                        <Picker.Item label='2' value='2'/>
                        <Picker.Item label='3' value='3'/>
                        <Picker.Item label='4' value='4'/>
                        <Picker.Item label='5' value='5'/>
                        <Picker.Item label='6' value='6'/>
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Non-smoking/Smoking?</Text>
                    <Switch value={this.state.smokingArea}
                    onValueChange={(value)=>this.setState({smokingArea:value})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}> Set Date and Time</Text>
                    <DatePicker
                        style={{flex: 2, marginRight: 20}}
                        date={this.state.date}
                        format=''
                        mode="datetime"
                        placeholder="select date and Time"
                        minDate="2020-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        } 
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => reservationAlert()}
                        title="Reserve"
                        color="#512DA8"
                        accessibilityLabel="Learn more about this purple button"
                        />
                </View>
            </Animatable.View>

        );
    }
}

const styles = StyleSheet.create({
    formRow:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginBottom:30
    },
    formLabel:{
        flex:2,
        fontSize:18
    },
    formInput:{
        flex:1
    },
    modal:{
        justifyContent:'center',
        margin:20
    },
    modalTitle:{
        textAlign:'center',
        backgroundColor:'#512DA8',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        color:'white'
    },
    modalText:{
        fontSize: 18,
        margin: 10
    }
});

export default Reservation;