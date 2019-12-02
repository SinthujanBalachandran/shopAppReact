import React from 'react';
import Links from "@material-ui/core/Link";
import { Switch, Route } from "react-router-dom";
import './App.css';
import SignIn from './components/login/SignIn';
import MainDrawer from "./components/main/MainDrawer";


function App() {
  return (
  <div>
    <Switch>
    <Route exact path="/">
         
          <SignIn />
        </Route>
    
    <Route path="/main-drawer">
      <MainDrawer/>
      </Route>
    </Switch>
  </div>
  
  );
}

export default App;
