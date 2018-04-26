import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../Home';
import GeneralExample from '../GeneralExample';
import Places from '../Places';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "example" component = {GeneralExample} title = "General Example" />
         <Scene key = "place" component = {Places} title = "Place" />
      </Scene>
   </Router>
)
export default Routes;