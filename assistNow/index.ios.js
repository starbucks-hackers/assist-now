/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import AddChild from './components/add-child/add-child'
import SignUp from './components/home/Home'

export default class assistNow extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'home':
        return (<SignUp navigator={navigator} />);
      case 'addchild': 
        return (<AddChild navigator={navigator} />)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id:'home'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('assistNow', () => assistNow);
