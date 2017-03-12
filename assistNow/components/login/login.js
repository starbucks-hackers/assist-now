import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button
} from 'react-native';

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
  }

  render() {
    return (
      <View>
        <Text>Email</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{height: 40}}
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