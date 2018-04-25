/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from "./src/routes/Routes";
import GeneralExample from './src/GeneralExample'
import Home from './src/Home'
import { Router, Stack, Scene } from 'react-native-router-flux';
export default class App extends Component{
  render() {
    return (
      <Routes />
    );
  }
}

