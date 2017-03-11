import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Button,
  Picker,
  AsyncStorage
} from 'react-native';

export default class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      age: '',
      gender: ''
    };
  }
  goToAdditional() {
    AsyncStorage.setItem('test', 'wregerxedfger');
    this.props.navigator.push({
        id: 'addChild2'
    });
  }
  addChild() {
    console.log("added child");
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Add Child</Text>
        <Text>First Name</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(firstname) => this.setState({firstname})}
          value={this.state.firstname}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(lastname) => this.setState({lastname})}
          value={this.state.lastname}
        />
        <Text>Age</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
        />
        <Text>Gender</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(gender) => this.setState({gender: gender})}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <Button
                style={styles.button}
                title="Additional Instruction"
                onPress={this.goToAdditional.bind(this)}
        />
        <Button
                style={styles.button}
                title="Add"
                onPress={this.addChild.bind(this)}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 20
    }
});