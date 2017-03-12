import React, { Component } from 'react';
import { 
	Text,
	View,
	Button
} from 'react-native';


export default class SignUpP1 extends Component {
	
	render(){
		return(
			<View>
				<Text>First Name:</Text>
				<Text>Last Name:</Text>
				<Text>First Name:</Text>
				<Text>Address:</Text>
				
				<Text>Please upload your an image: </Text>
			</View>
		);
	}
}

// const styles = {
// 	signUpStyle:{
// 		background: 'rgba( 0, 121, 189, 0.85)',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		verticalAlign: 'center',
// 		height: 60,
// 		paddingTop: 15,
// 		shadowColor: '#000',
// 		shadowOffset: { width: 0, height: 2 },
// 		shadowOpacity: 0.2
// 	}
// }

// export default class  SignUpP1 extends Component {
// 	render() {
// 		return(
// 			<View>
// 				<Text>Client Info</Text>
// 				<Button></Button>
// 			</View>
// 		)
// 	}
// }