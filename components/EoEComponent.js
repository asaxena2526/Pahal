import React from 'react';
import {StyleSheet, View, FlatList,Alert,Text,TouchableOpacity} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import {TOPICS} from '../shared/eoe';

function EoE(props){
    const { buttonStyle, textStyle } = styles;
    const { navigate } = props.navigation;
    const renderSubjects = ({item, index}) => {

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
            data={TOPICS}
            renderItem={renderSubjects}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    );
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
export default EoE;