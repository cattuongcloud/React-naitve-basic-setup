import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Container } from "native-base";
import MapContainer from './MapContainer';
class Home extends Component {
	componentDidMount(){
		this.props.setName(); 
	}		
	render() {
		const region = {
			latitude: 10.797113,
			longitude:106.643596,
			latitudeDelta:0.0922,
			longitudeDelta:0.0421
		}
		return (
		<Container>
			<MapContainer region={region}/>
		</Container>
		);
	}
}
export default Home;