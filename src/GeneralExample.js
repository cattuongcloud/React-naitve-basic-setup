import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default class GeneralExample extends Component {
  render() {
    const goToExample = () => {
      Actions.example()
   }
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { ... StyleSheet.absoluteFillObject },
   map: { ...StyleSheet.absoluteFillObject }
 });