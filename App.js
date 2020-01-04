//expo start : to start develop
import * as react from 'react';
import React, { Component } from 'react';
import {  ScrollView,Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import MapView from 'react-native-maps';

import AssertExample from './components/AssertExample';
import Blink from './components/Blink';
import Buttonbasic from './components/Buttonbasic';
import Callouts from './components/Callouts';


let {height, width} = Dimensions.get('window')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends react.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View>
        <Text style={styles.name}>To you get started, edit App.js</Text>
        <AssertExample />
        </View>

        <View>
           <Buttonbasic/>
        </View>

        <View style={styles.container1}>
        <MapView
         style={styles.map}
         />
         <Callouts/>
        </View>

       
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#EEEC95',
  },
  container1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#EEEC95',
    width: width,
    height: height
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  name: {
    margin: 10,
    textAlign: 'center',
    color: '#04951E',
    marginBottom: 10,
  }
});
