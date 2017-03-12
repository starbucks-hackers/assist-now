import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
  TextInput,
  Button
} from 'react-native';

export default class AddChild2 extends Component {
  constructor() {
    super();
    this.state = {
      allergies: '',
      dietaryRestrictions: '',
      healthConcerns: '',
      other: ''
    }
  }
  componentDidMount() {
    AsyncStorage.getItem("childfirstname").then((res) => {
        this.setState({"childfirstname": res});
    })
    AsyncStorage.getItem("childlastname").then((res) => {
        this.setState({"childlastname": res});
    })
    AsyncStorage.getItem("childage").then((res) => {
        this.setState({"childage": res});
    })
    AsyncStorage.getItem("childgender").then((res) => {
        this.setState({"childgender": res});
    })
  }
  goToChild1() {
    AsyncStorage.setItem('childallergies', this.state.allergies);
    AsyncStorage.setItem('childdietaryrestrictions', this.state.dietaryRestrictions);
    AsyncStorage.setItem('childhealthconcerns', this.state.healthConcerns);
    AsyncStorage.setItem('childother', this.state.other);
    this.props.navigator.push({
        id: 'addChild'
    });
  }
  addChild() {
    console.log("added child");
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Add Child: Additional Info</Text>

        <Text>Allergies</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(allergies) => this.setState({allergies})}
          value={this.state.allergies}
        />
        <Text>Dietary Restrictions</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(dietaryRestrictions) => this.setState({dietaryRestrictions})}
          value={this.state.dietaryRestrictions}
        />
        <Text>Health Concerns</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(healthConcerns) => this.setState({healthConcerns})}
          value={this.state.healthConcerns}
        />
        <Text>Other</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(other) => this.setState({other})}
          value={this.state.other}
        />
        <Button
                style={styles.button}
                title="Back"
                onPress={this.goToChild1.bind(this)}
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
  },
  textarea: {
    borderWidth: 2
  }
});