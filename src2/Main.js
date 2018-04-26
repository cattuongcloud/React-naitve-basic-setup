import React, { Component } from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
//import { createStore } from "redux";
//import createStore from './store/createStores';
export default class Main extends Component {
    renderApp(){
        debugger;
        const initialState = window.___INTITIAL_STATE__;
        // const reducer = (state = initialState, action) => { 
        //     return reducer;
        // }
		//const store = createStore(reducer); 
		return (
			// <Provider store={store}> 
			// 	<Routes />
            // </Provider>
            <Routes />
            
		);

	}  
  render() {    
    return this.renderApp(); 
  }
}