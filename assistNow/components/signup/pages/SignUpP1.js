import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button
} from 'react-native';


export default class SignUpP1 extends Component {
	constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phone:''
    };
  }
	

	render(){
		return(
			<View style={styles.SignUpContainer}>
				<Text>First Name:</Text>
				<TextInput
					onChangeText={(firstName)=> {this.props.updateInfo('firstName', firstName)}}
					>
				</TextInput>
				
				<Text>Last Name:</Text>
				<TextInput
					onChangeText={(lastName)=> {this.props.updateInfo('lastName', lastName)}}
					>
				</TextInput>
				
				<Text>Address:</Text>
				<TextInput
					onChangeText={(address)=> {this.props.updateInfo('address', address)}}
					>
				</TextInput>
				
				<Text>Telephone:</Text>
				<TextInput
					onChangeText={(phone)=> {this.props.updateInfo('phone', phone)}}
					>
				</TextInput>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	signUpContainer:{
		padding: 5,
		color: 'rgba( 0, 121, 189, 0.85)',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	}
})

