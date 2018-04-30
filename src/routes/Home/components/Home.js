import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Container } from "native-base";
import MapContainer from './MapContainer';
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
const taxiLogo = require("../../../assets/img/taxi_logo_white.png");
const carMarker = require("../../../assets/img/carMarker.png");
import Fare from "./Fare";
class Home extends Component {
	componentDidMount(){
		this.props.getCurrentLocation(); 
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
			<HeaderComponent logo={taxiLogo}/>
			{this.props.region.latitude &&
			<MapContainer
				region={this.props.region}
				getInputData={this.props.getInputData}
				toggleSearchResultModal={this.props.toggleSearchResultModal}
				getAddressPredictions={this.props.getAddressPredictions}
				resultTypes={this.props.resultTypes}
				predictions={this.props.predictions}
				getSelectedAddress={this.props.getSelectedAddress}
				selectedAddress={this.props.selectedAddress}
			/>
			} 			
			{
				this.props.fare &&
				<Fare fare={this.props.fare} />
			}
			<FooterComponent/>
		</Container>
		);
	}
}
export default Home;