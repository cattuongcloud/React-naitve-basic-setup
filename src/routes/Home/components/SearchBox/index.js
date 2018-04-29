import React from "react";
import {Text} from "react-native";
import { View, InputGroup, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./SearchBoxStyles.js";
export const SearchBox = ({getInputData, toggleSearchResultModal, getAddressPredictions})=> {
	//const { selectedPickUp, selectedDropOff } = selectedAddress || {};
	function handleInput(key, val){
		getInputData({
			key,
			value:val
		});
		getAddressPredictions();
	}

		return(
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<Text style={styles.label}>PICK UP</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input 
							onFocus={()=>toggleSearchResultModal("pickUp")}
							onChangeText={handleInput.bind(this, "pickUp")}
							style={styles.inputSearch}
							placeholder="Choose pick-up location"							
							
						/>
					</InputGroup>
				</View>
				<View style={styles.secondInputWrapper}>
					<Text style={styles.label}>DROP-OFF</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input
							onFocus={()=>toggleSearchResultModal("dropOff")}
							onChangeText={handleInput.bind(this, "dropOff")}
							style={styles.inputSearch}
							placeholder="Choose drop-off location"
						/>
					</InputGroup>
				</View>
			</View>

		);
};

export default SearchBox;