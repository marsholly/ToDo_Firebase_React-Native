import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TextInput, ListView } from 'react-native';
import firebase from 'firebase';

export default class devdacticFirebase extends Component {
  constructor(props) {
    super(props);
    let config = {
      
    };
    firebase.initializeApp(config);
    let myFireBaseRef = firebase.database().ref();
    myFireBaseRef.set({
      title: 'Hello world!',
      author: 'Holly'
    });
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('devdacticFirebase', () => devdacticFirebase);
