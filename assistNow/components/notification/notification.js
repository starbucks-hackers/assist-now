import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button
} from 'react-native';

import Navbar from './../navbar/navbar';

export default class Notification extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Navbar navigator={this.props.navigator} />

        <Text>from notificationzzz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});