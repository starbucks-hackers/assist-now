import React, { Component } from 'react';
import {
		StyleSheet, 
		Text,
		TextInput, 
		View,
		Button 
	} from 'react-native';

export default class  SignUpP2 extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("email").then((res) => {
  //       this.setState({"email": res});
  //   })
  //   AsyncStorage.getItem("password").then((res) => {
  //       this.setState({"password": res});
  //   })
  // }

	render() {
		return(
			<View>
				<Text>Email:</Text>
				<TextInput
					onChangeText={(email)=> {this.props.updateInfo('email', email)}}>
				</TextInput>

				<Text>Password:</Text>
				<TextInput
					onChangeText={(password)=> {this.props.updateInfo('password', password)}}>
				</TextInput>
			</View>
		)
	}
}

