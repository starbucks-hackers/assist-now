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
            id: 'addchild'
        });
    }
    toSignIn(){
        this.props.navigator.push({
            id: 'SignIn'
        })
    }
    render(){
        return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.publicdomainpictures.net/pictures/80000/velka/mother-with-the-baby.jpg'}} style={{width: 400, height: 670, position:'absolute'}}/>
            <Text style={styles.h1}><Text style={styles.assist}>NANNY</Text><Text style={styles.now}>NOW</Text></Text>
            <View style={styles.buttonWrapper}>
                <Button
                    style={styles.button}
                    title="Sign Up"
                    onPress={this.toForm.bind(this)}
                />
                <Button
                    style={styles.button}
                    title="Sign In"
                    onPress={this.toSignIn.bind(this)}
                />
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
        borderColor: 'red',
        marginTop: 450,
        backgroundColor: 'rgba(0,0,0,0)',
        // borderStyle: 'solid',
        // borderColor: 'red',
        // borderWidth: 1,
        width: 200,
    },
    button: {
        borderColor: 'white',
    },
    h1: {
        fontSize: 45,
    },
    assist:{
        color: '#0079BD',
    },
    now:{
        color: 'red'
    },
    image:{
        flex: 1,
        resizeMode: 'cover'
    }
});
