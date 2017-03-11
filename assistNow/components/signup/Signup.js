import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Signup extends Component {
    render(){
        const { navigate } = this.props.navigation;
        return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigate('Setup', { name: 'Jane' })
            }
        />
        );
    }
}