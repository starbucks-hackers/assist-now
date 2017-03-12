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


import Home from './components/home/Home';
import Login from './components/login/login';
import SignUp from './components/signup/Signup';
import AddChild from './components/add-child/add-child';
import AddChild2 from './components/add-child/add-child2';
import Profile from './components/profile/Profile';
import Nannys from './components/nannys/Nannys';
import NannyProfile from './components/nannys/nannysProfile/NannysProfile';
import Notification from './components/notification/notification';


export default class assistNow extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'home':
        return (<Home navigator={navigator} />);
      case 'login':
        return (<Login navigator={navigator} />); 
      case 'signUp':
        return (<SignUp navigator={navigator} />);
      case 'addChild': 
        return (<AddChild navigator={navigator} />);
      case 'addChild2':
        return (<AddChild2 navigator={navigator} />);
      case 'profile':
        return (<Profile navigator={navigator} />);
      case 'nannys':
        return (<Nannys navigator={navigator} />);
      case 'nannyprofile':
        return (<NannyProfile navigator={navigator} data={route}/>);
      case 'notification':
        return (<Notification navigator={navigator} />);
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id:'profile'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('assistNow', () => assistNow);
