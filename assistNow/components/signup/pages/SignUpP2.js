import React, { Component } from 'react';
import { 
		Text, 
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

	render() {
		return(
			<View>
				<Text>email:</Text>
				<TextInput
					onChangeText={(email)=> this.setState({email})}
					value={this.state.email}>
				</TextInput>

				<Text>password:</Text>
				<TextInput
					onChangeText={(password)=> this.setState({password})}
					value={this.state.password}>
					</TextInput>
			</View>
		)
	}
}