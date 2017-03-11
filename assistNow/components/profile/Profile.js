import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

export default class Profile extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Wesley Huang',
            img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAcrAAAAJDRkYjUzMjQ2LWYwYTctNDI1Yi05ZDVlLTY5Y2JhODk3Yzk1YQ.jpg'
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.img}} style={{width: 100, height:100, borderRadius: 50, marginBottom: 10, marginTop: 20}}/>
                <Text>{this.state.name}</Text>
                <Text>Children</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        top: 20,
    }
})