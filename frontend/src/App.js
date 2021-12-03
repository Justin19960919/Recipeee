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
import SearchScreen from "./components/SearchScreen";
import RecipeDetail from "./components/RecipeDetail";


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

        <Route path="/recipe-search" exact={true}>
          <SearchScreen />
        </Route>
  
        <Route path="/recipe-detail/:id">
          <RecipeDetail/>
        </Route>


      </BrowserRouter>
    </>
  );

}


export default App;
