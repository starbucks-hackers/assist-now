import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Signup extends Component {
    onPress(){
        this.props.navigator.push({
            id: 'addChild'
        });
    }
    render(){
        return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="Sign up"
                onPress={this.onPress.bind(this)}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green' 
    },
    button: {
        borderColor: 'green'
    }
});