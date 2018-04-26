import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
export default class GeneralExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            latitude: '2222',
            longitude:'',
            place: 'sddsf',
            loading: 1,
            currentPlaceResults: [],
            firstItem: '',
            error: ''

        };        
    }
    openSearchModal() {
       
            RNGooglePlaces.getCurrentPlace()
                .then(
                    results => {
                        var firstel = '';
                        results.forEach((element) => {
                            firstel = element.name
                        });
                        this.setState({ firstItem : firstel, loading: 2, currentPlaceResults: results })}
                )
                .catch(error => this.setState({ loading: false, error: error.message }));
       
      } 
         
    render() {
        const goToExample = () => {
        Actions.example()
    }
        return ( 
        <View>
            <Text>{this.state.date.toString()}</Text>
            <Text>{this.state.latitude}</Text>
            <Text>{this.state.longitude}</Text>
            <Text>{this.state.loading.toString()}</Text>
            <Text>{this.state.currentPlaceResults.toString()}</Text>
            <Text>{this.state.firstItem}</Text>
            
            <Text>{this.state.error}</Text>
            <TouchableOpacity onPress={() => this.openSearchModal()}>
                <Text>Pick a Place</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
