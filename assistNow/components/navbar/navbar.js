import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.v1}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            />
          </View>
          <View style={styles.v2}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            />
          </View>
          <View style={styles.v3}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v3: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});