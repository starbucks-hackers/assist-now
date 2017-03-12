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
  componentDidMount() {
    AsyncStorage.getItem("childfirstname").then((res) => {
        this.setState({"childfirstname": res});
    })
    AsyncStorage.getItem("childlastname").then((res) => {
        this.setState({"childlastname": res});
    })
    AsyncStorage.getItem("childage").then((res) => {
        this.setState({"childage": res});
    })
    AsyncStorage.getItem("childgender").then((res) => {
        this.setState({"childgender": res});
    })
  }
  render() {
    return (
      <View>
        <Text>from child2</Text>
        <Text>{this.state.childgender ? this.state.childgender : ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});