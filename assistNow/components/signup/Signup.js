import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button
} from 'react-native';
import SignUpP1 from './pages/SignUpP1';
import SignUpP2 from './pages/SignUpP2';



export default class SignUp extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	p1isVisible: true,
    	firstName: '',
      lastName: '',
      address: '',
      phone:'',
      email:'',
      password:'',
      id: ''
   	}
  }

	changePage() {
    this.setState({
    	p1isVisible: !this.state.p1isVisible
    });
  }

  updateInfo(field, content){
  	console.log(field, content)
  		this.setState({
  			[field]: content
  		})
  	setTimeout(()=>{
  		console.log(this.state)
  	}, 300)
  }
  
  submitInfo() {

  }

	render(){
		
		return(
			<View style={styles.container}>
				<Text style={styles.signUpTitle}>Create Profile</Text>
				{!this.state.p1isVisible? <SignUpP2 updateInfo={this.updateInfo.bind(this)} />:<SignUpP1 updateInfo={this.updateInfo.bind(this)} />}
				{this.state.p1isVisible? 
					<Button 
						style={styles.button}
						title="Next"
            onPress={this.changePage.bind(this)}/>:
          <Button 
						style={styles.button}
						title="Done"
            onPress={this.submitInfo.bind(this)}/>
        }
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: 'center',
		//justifyContent: 'center',
		// flexDirection: 'column',
		// backgroundColor: 'rgba( 0, 0, 0, 0.85)'
	},
	signUpTitle: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'rgba( 0, 121, 189, 0.85)',
		justifyContent:'center',
		alignItems: 'center',
		textAlign: 'center',
		paddingTop: 8,
		// backgroundColor: '#ccc',
		borderBottomColor:'rgba( 201, 201, 201, 0.85)',
		shadowColor: 'rgba( 201, 201, 201, 0.85)',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.9
	},
	button: {
    borderStyle: 'solid',
    borderColor: '#0079BD',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#0079BD',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

