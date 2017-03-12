import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

import Navbar from './../navbar/navbar'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  goToHome() {
    this.props.navigator.push({
        id: 'home'
    });
  }
  login() {
    console.log("logging in");
    return fetch(`https://8livqxv493.execute-api.us-west-2.amazonaws.com/dev/api/user/${this.state.email}`).then((response) => response.json())
      .then((responseJson) => {
        console.log("@@@@", responseJson)
        if (this.state.password === responseJson.password){
          AsyncStorage.setItem('currentUser', this.state.email);
          this.props.navigator.push({
            id:'profile'
          })
        } else {
          alert("wrong password")
        }
      })
        .catch((error) => {
            console.error(error);
            alert("wrong username")
        });
  }

  render() {
    return (
      <View style={{paddingTop: 200}}>
        <Text>Email</Text>
        <TextInput
          style={{marginBottom: 50}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{marginBottom: 50}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
                style={styles.button}
                title="Login"
                onPress={this.login.bind(this)}
        />
        <Button
                style={styles.button}
                title="Back"
                onPress={this.goToHome.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});