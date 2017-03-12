import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

export default class ChildCard extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.img}} style={{width:70, height:70, borderRadius: 35}}/>
                <Text style={styles.name}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0079BD',
        width: 350,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#0079BD',
    },
    name:{
        fontSize: 40,
        marginLeft: 10,
    }
})