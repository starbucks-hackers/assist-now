import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

export default class AddChild2 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentWillMount() {
    this.setState({
      child1Info: AsyncStorage.getItem('test')
    })
  }
  render() {
    return (
      <View>
        <Text>from child2</Text>
        {this.state.child1Info ? this.state.child1Info : ''}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});