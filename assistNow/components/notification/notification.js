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
        <Text>from notificationzzz</Text>

        <Navbar navigator={this.props.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});