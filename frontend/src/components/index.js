import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import profile from "../reducers/profile";
const reducers = combineReducers({profile})
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>


        </Provider>
    );
};
export default ReduxExamples;