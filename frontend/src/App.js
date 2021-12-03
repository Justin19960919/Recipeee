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
import SearchScreen from "./components/SearchScreen";


const App = () => {

  return (
    <>
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

        <Route path="/search" exact={true}>
          <SearchScreen />
        </Route>

      </BrowserRouter>
    </>
  );

}


export default App;
