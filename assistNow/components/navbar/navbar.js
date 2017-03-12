import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  navClick(num) {
    if (num === 1) {
      this.props.navigator.push({
        id: 'profile'
      });
    } else if (num === 2) {
      this.props.navigator.push({
        id: 'nannys'
      });
    } else {
      this.props.navigator.push({
        id: 'notification'
      });
    }
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.v1} onPress={()=>{this.navClick(1)}}>
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: 'https://img.clipartfest.com/175ffe255790108f8c44746c439f845e_users-profile-icon-profile-icon-clipart_500-500.png'}}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.v2} onPress={()=>{this.navClick(2)}}>
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: 'https://maxcdn.icons8.com/windows8/PNG/512/Very_Basic/search-512.png'}}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.v3} onPress={()=>{this.navClick(3)}}>
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/194977-200.png'}}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
  },
  v1: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRightColor: 'gray',
    borderRightWidth: 0,
    
  },
  v2: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRightColor: 'gray',
    borderRightWidth: 0,
  },
  v3: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRightColor: 'gray',
    borderRightWidth: 0,
  }
});