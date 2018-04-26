import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
class Home extends Component {
	componentDidMount(){
		this.props.setName(); 
	}	
	render() {   
		return (
		<View>
			<Text>Hello Word {this.props.name}!</Text>   
		</View>
		);
	}
}
export default Home;