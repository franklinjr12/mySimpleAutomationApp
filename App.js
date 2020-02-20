/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export class MyMenuDesign extends Component {
  render() {
    return (

      <View>
        <View style={{ width: '100%', height: '30%', backgroundColor: 'red' }}></View>
        <View style={{ position: 'absolute', top: '30%', width: '20%', height: '310%', backgroundColor: 'blue' }}></View>
        <View style={{ position: 'absolute', top: '30%', left: '20%', width: '100%', height: '310%', backgroundColor: 'green' }}></View>
      </View>

    );
  }
}

export default class Main extends Component {
  render() {
    return (

      <MyMenuDesign></MyMenuDesign>

    );
  }
}
