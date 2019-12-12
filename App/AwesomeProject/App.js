/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style = {[styles.rectangle , {backgroundColor : "red"} ]}><Text>1</Text></View>
        <View style = {[styles.rectangle , {backgroundColor : "blue"} ]}><Text>2</Text></View>
        <View style = {[styles.rectangle , {backgroundColor : "yellow"} ]}><Text>3</Text></View>
      </View>
    );
  };
};

const styles = StyleSheet.create ({
  container : {
    flexDirection : "column",
    justifyContent : "space-between",
    alignItems : "stretch",
    height : "100%"
  },
  rectangle : {
    height : 100,
    // width : 100
  }
});
