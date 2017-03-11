import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

export default class Home extends Component {
    toForm(){
        this.props.navigator.push({
            id: 'signup'
        });
    }
    toSignIn(){
        this.props.navigator.push({
            id: 'signin'
        })
    }
    render(){
        return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.publicdomainpictures.net/pictures/80000/velka/mother-with-the-baby.jpg'}} style={{width: 400, height: 670, position:'absolute'}}/>
            <Text style={styles.h1}><Text style={styles.assist}>NANNY</Text><Text style={styles.now}>NOW</Text></Text>
            <View style={styles.buttonWrapper}>
            <View style={styles.button}>
                <Button
                    
                    title="Sign Up"
                    color ="white"
                    onPress={this.toForm.bind(this)}
                />
            </View>
            <View>
                <Button
                    style={styles.button}
                    
                    title="Sign In"
                    onPress={this.toSignIn.bind(this)}
                />
            </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#E50914',
        marginTop: 450,
        backgroundColor: 'rgba(0,0,0,0)',
        // borderStyle: 'solid',
        // borderColor: 'red',
        // borderWidth: 1,
        width: 200,
    },
    button: {
        borderStyle: 'solid',
        borderColor: '#0079BD',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#0079BD',
        paddingLeft: 10,
        paddingRight: 10,
    },
    h1: {
        fontSize: 45,
    },
    assist:{
        color: '#0079BD',
    },
    now:{
        color: '#E50914'
    },
    image:{
        flex: 1,
        resizeMode: 'cover'
    }
});
