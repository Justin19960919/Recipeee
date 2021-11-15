import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";

// 
import HomeScreen from "./components/HomeScreen";
import RegisterScreen from "./components/RegisterScreen";

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

      </BrowserRouter>
    </>
  );

}


export default App;
