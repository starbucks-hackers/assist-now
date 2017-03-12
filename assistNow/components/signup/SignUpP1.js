import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';


export default class SignUpP1 extends Component {
	constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      state: '',
      isVisible: false
   	}
  }
	render(){
		return(
			<View style={styles.sign1Container}>
				<Text>First Name:</Text>
				<Text>Last Name:</Text>
				<Text>Telephone:</Text>
				<Text>Address:</Text>
				<Text>Please upload your an image: </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	sign1Container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'stretch',
		alignItems: 'center'
		// paddingLeft: 10
	}
})

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