import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default class Home extends Component {
  render() {    
    return (
      <Container>
        <Button onPress={() => Actions.example()}>
          <Text>
             Go to Example  
          </Text>
        </Button>

        <Button onPress={() => Actions.place()}>
          <Text>
             Go to Places  
          </Text>
        </Button>
      </Container>
    );
  }
}