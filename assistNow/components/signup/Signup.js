import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';



export default class SignUp extends Component {

	render(){
		return(
			<View>
				<Text style={styles.signUpTitle}>Create Profile</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	signUpTitle: {
		backgroundColor: 'rgba( 0, 121, 189, 0.85)',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	}
});



//Goal:
// import SignUp1 from './components/signup/SignUpP1';
// import SignUp2 from './components/signup/SignUpP2';

// export default class SignUp extends Component {
// 	const { signUpStyle } = styles;

// 	render(){
// 		return(
// 			<View>
// 				<Text style={signUpStyle}>Create Profile</Text>
// 				// <SignUpP1 />
// 				// <SignUpP2 />
// 			</View>
// 		);
// 	}
// }
