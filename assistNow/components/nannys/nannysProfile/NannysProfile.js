import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

export default class NannyProfile extends Component{
    constructor(props){
        super(props)
    }
    getMoviesFromApiAsync() {
        return fetch('https://8livqxv493.execute-api.us-west-2.amazonaws.com/dev/api/providers')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
    componentWillMount(){
        this.setState({
            clickedNanny: false,
        })
        this.getMoviesFromApiAsync().then((res) => {
            let list = [];
            for(var i = 0; i < res.length; i++){
                res[i].img= 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg'
                list.push(res[i]);
            }
            console.log(list)
            this.setState({
                nannys: list
            })
            console.log(this.state.nannys);
            if(this.state.nannys){
            for(var i = 0; i < this.state.nannys.length; i++){
                if(this.state.nannys[i].id === this.props.data.passProps.id){
                    this.setState({
                        clickedNanny: this.state.nannys[i]
                    })
                };
            }
            console.log(this.state.clickedNanny,"sefsef");
        }     
        })
        
        console.log(this.props.data);
        
    }
    sendNotification(){
        this.state.clickedNanny.notifications.push('You have a connection!')
        console.log(this.state.currentNanny.notifications);
    }
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.firstRow}>
                <Image source={{uri: this.state.clickedNanny.image}} style={{width:100, height: 100}}/>
                <Text style={styles.name}>{this.state.clickedNanny ? this.state.clickedNanny.firstName : ''}</Text>
                <Text style={styles.age}>{this.state.clickedNanny ? this.state.clickedNanny.age : ''}</Text>
            </View>
                <Text style={styles.location}> {this.state.clickedNanny ? this.state.clickedNanny.address : ''}</Text>
                <Text style={{fontSize: 20, marginBottom: 7}}>Bio</Text>
                <Text style={styles.bio}> {this.state.clickedNanny ? this.state.clickedNanny.bio : ''}</Text>
                <Text style={{fontSize: 20, marginBottom: 7}}>Contact</Text>

            
                <Text style={styles.phone}> {this.state.clickedNanny ? this.state.clickedNanny.phone : ''}</Text>
                <Text style={styles.email}> {this.state.clickedNanny ? this.state.clickedNanny.email : ''}</Text>

                <Text style={{fontSize: 20, marginBottom: 7, marginTop: 30,}}>Special Skills</Text>
                <Text>{this.state.clickedNanny ? this.state.clickedNanny.specialSkills.map((skill, index) => {
                    if(index === this.state.clickedNanny.specialSkills.length - 1){
                        return (
                            <Text key={index}>
                                {skill}
                            </Text>
                        )
                    } else {
                        return (
                            <Text key={index}>
                                {skill}, &nbsp;
                            </Text>
                        )
                    }
                }) : ''}</Text>
            <View style={styles.button}>
            <Button 
                color='blue'
                title="connect"
                onPress={this.sendNotification.bind(this)}
            />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    firstRow:{
        flexDirection: 'row',
        marginBottom: 30,
    },
    name:{
        fontSize: 50,
        fontWeight: '200',
        marginLeft: 40,
        marginRight: 30,
    },
    age:{
        fontSize: 30,
    },
    bio:{
        width: 300,
        marginBottom: 30,
    },
    button:{
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 50,
        borderStyle: 'solid',
        width: 300,
    },
    location:{
        position: 'absolute',
        top: 80,
        left: 175,
        fontWeight: '100',
    },
    contact:{
        marginBottom: 30,
    },
    email:{
        justifyContent: 'center'
    },
    phone:{
        justifyContent: 'center'
    }
})