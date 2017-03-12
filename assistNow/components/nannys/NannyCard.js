import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

export default class NannyCard extends Component {
    render(){
        return (
            <TouchableHighlight onPress={() => {this.props.test(this.props.id)}}>
            <View style={styles.container} >
                
                <Image source={{uri: this.props.img}} style={{width: 70, height:70, borderRadius: 10}}/>
                <Text style={styles.nannyName}>{this.props.first}</Text>
                <Text style={styles.nannyName}>{this.props.age}</Text>
                <Text style={styles.rating}>{this.props.rating}</Text>
            </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        top: 20,
        width: 350,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
        borderRadius: 3,
    },
    nannyName:{
        fontSize: 25,
        fontWeight: '100',
    },
    rating:{
        color: 'blue',
    }
    // table:{
    //     flexDirection: 'row',
    //     width: 200,
    //     justifyContent: 'space-between',
    //     position: 'absolute',
    //     right: 0,
    //     top: 0,
    // }
})