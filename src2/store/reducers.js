import { combineReducers } from "redux";

export const makeRootReducer = () => {
	return combineReducers({
		home: {},
		trackDriver: {}
	});
}

export default makeRootReducer;