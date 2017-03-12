import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

import Navbar from './../navbar/navbar';

export default class Notification extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Navbar navigator={this.props.navigator} />

        <TouchableHighlight>
          <View style={styles.container} >
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'}} style={{width: 70, height:70, borderRadius: 10}}/>
              <Text style={styles.nannyName}>name</Text>
              <Text style={styles.nannyName}>has accepted your request!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.container} >
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'}} style={{width: 70, height:70, borderRadius: 10}}/>
              <Text style={styles.nannyName}>name</Text>
              <Text style={styles.nannyName}>has accepted your request!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.container} >
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'}} style={{width: 70, height:70, borderRadius: 10}}/>
              <Text style={styles.nannyName}>name</Text>
              <Text style={styles.nannyName}>has accepted your request!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.container} >
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'}} style={{width: 70, height:70, borderRadius: 10}}/>
              <Text style={styles.nannyName}>name</Text>
              <Text style={styles.nannyName}>has accepted your request!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.container} >
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg'}} style={{width: 70, height:70, borderRadius: 10}}/>
              <Text style={styles.nannyName}>name</Text>
              <Text style={styles.nannyName}>has accepted your request!</Text>

          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        top: 20,
        width: 350,
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
    },
    nannyName:{
        fontSize: 15,
        fontWeight: '100',
    }
})