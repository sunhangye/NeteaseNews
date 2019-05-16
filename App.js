/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  PureComponent
} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import XFFlatList from './app/components/Header'
import Home from './app/pages/Home'
import './app/storage/store'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",

  },
});

