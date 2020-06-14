import React, {Component} from 'react';
import {Text,ScrollView,View,StyleSheet,Picker,Switch,Button} from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class Reservation extends Component{

    constructor(props){
        super(props);

        this.state={
            guests: 1,
            smokingArea: false,
            date: ''
        }
    }

    handleReservation(){
        console.log(JSON.stringify(this.state));
        this.setState({
            guests: 1,
            smokingArea: false,
            date: ''
        })
    }

    render(){
        return(
            <ScrollView>
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
                        onPress={() => this.handleReservation()}
                        title="Reserve"
                        color="#512DA8"
                        accessibilityLabel="Learn more about this purple button"
                        />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    formRow:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    formLabel:{
        flex:2,
        fontSize:18
    },
    formInput:{
        flex:1
    }
});

export default Reservation;