import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";

// import bootstrap and font awesome
import "./vendors/boostrap-compiled/css/bootstrap.css";
import "./vendors/bootstrap.min.css";
import "./vendors/font-awesome/css/all.css";
import "./App.css";

import 'bootstrap/dist/js/bootstrap.js';

// 
import HomeScreen from "./components/HomeScreen";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";
import RecipeSearchScreen from "./components/RecipeSearchScreen";
import RecipeDetailScreen from "./components/RecipeDetailScreen";

import UserRecipeScreen from "./components/UserRecipeScreen";
import ProfileScreen from "./components/ProfileScreen";
import PrivacyPolicy from "./components/PrivatePolicyScreen";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import profile from "./reducers/profile";

import WeatherComponent from "./components/WeatherComponent.js";



const App = () => {

  const reducers = combineReducers({profile})
  const store = createStore(reducers);
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>

        <Route path="/" exact={true}>
          <HomeScreen />
        </Route>
        <Route path="/register" exact={true}>
          <RegisterScreen />
        </Route>
        <Route path="/login" exact={true}>
          <LoginScreen />
        </Route>
        <Route path="/profile" exact={true}>
        <ProfileScreen/>
      </Route>
        <Route path="/privacy">
          <PrivacyPolicy/>
        </Route>
        <Route path="/recipe-search/:searchInput">
          <RecipeSearchScreen />
        </Route>

        <Route path="/recipe-detail/:id">
          <RecipeDetailScreen />
        </Route>

        {/* <Route path="/weather">
          <WeatherComponent/>
        </Route> */}

      </BrowserRouter>
        </Provider>
    </>
  );

}


export default App;
