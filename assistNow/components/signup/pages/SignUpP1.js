import React, { Component } from 'react';
import { 
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
      telephone:''
    };
  }
	
	render(){
		return(
			<View>
				<Text>First Name:</Text>
				<TextInput
					onChangeText={(firstname)=> this.setState({firstname})}
					value={this.state.firstname}>
				</TextInput>
				
				<Text>Last Name:</Text>
				<TextInput
					onChangeText={(lastname)=> this.setState({lastname})}
					value={this.state.lastname}>
				</TextInput>
				
				<Text>Address:</Text>
				<TextInput
					onChangeText={(address)=> this.setState({address})}
					value={this.state.address}>
				</TextInput>
				
				<Text>State:</Text>
				<TextInput
					onChangeText={(state)=> this.setState({state})}
					value={this.state.state}>
				</TextInput>
				
				<Text>Telephone:</Text>
				<TextInput
					onChangeText={(telephone)=> this.setState({telephone})}
					value={this.state.telephone}>
				</TextInput>
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