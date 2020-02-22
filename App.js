/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';


export class MainHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      headerName: 'test'
    }
    if (this.props.headerName != null) {
      this.state.headerName = this.props.headerName;
    }
  }
  addDevice = function () {
    Alert.alert('pintinho');
  }
  naoSei = function () {
    Alert.alert('vai ter coisa aqui');
  }
  render() {
    return (
      <View style={{ flex: 1 }, styles.mainHeader}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              style={{ width: '100%', height: '100%', justifyContent: 'center' }}
              onPress={this.naoSei}>
              <Text style={{ textAlign: 'center' }}>?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{this.state.headerName}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              style={{ width: '100%', height: '100%', alignItens: 'center' }}
              onPress={this.addDevice}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./images/addButton.jpeg')}>
              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <MainHeader style={{ flex: 1 }} ></MainHeader>
        <ScrollView style={{ flex: 1, backgroundColor: 'gray' }}></ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    height: 40,
    backgroundColor: 'white'
  }
});