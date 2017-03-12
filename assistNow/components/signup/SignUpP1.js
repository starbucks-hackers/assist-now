import React, { Component } from 'react';
import { 
		Text, 
		View,
		Button 
	} from 'react-native';


import React, { Component } from 'react';
import { 
	Text,
	View,
	Button
} from 'react-native';
import SignUp1 from './components/signup/SignUpP1';


export default class SignUp extends Component {
	const { signUpStyle } = styles;

	render(){
		return(
			<View>
				<Text style={signUpStyle}>Create Profile</Text>
				<SignUpP1 />
			</View>
		);
	}
}

const styles = {
	signUpStyle:{
		background: 'rgba( 0, 121, 189, 0.85)',
		justifyContent: 'center',
		alignItems: 'center',
		verticalAlign: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	}
}

export default class  SignUpP1 extends Component {
	render() {
		return(
			<View>
				<Text>Client Info</Text>
				<Button></Button>
			</View>
		)
	}
}