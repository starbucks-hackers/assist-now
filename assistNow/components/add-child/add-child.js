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
      gender: 'male'
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("childallergies").then((res) => {
        this.setState({"childallergies": res});
    })
    AsyncStorage.getItem("childdietaryrestrictions").then((res) => {
        this.setState({"childdietaryrestrictions": res});
    })
    AsyncStorage.getItem("childhealthconcerns").then((res) => {
        this.setState({"childhealthconcerns": res});
    })
    AsyncStorage.getItem("childother").then((res) => {
        this.setState({"childother": res});
    })
  }

  goToAdditional() {
    AsyncStorage.setItem('childfirstname', this.state.firstname);
    AsyncStorage.setItem('childlastname', this.state.lastname);
    AsyncStorage.setItem('childage', this.state.age);
    AsyncStorage.setItem('childgender', this.state.gender);
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
          selectedValue={this.state.gender}
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