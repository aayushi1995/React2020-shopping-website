import React from 'react';

import './App.css';

import {Route,Switch} from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';

const Hats = () => {
  return (
    <h1>Hats</h1>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={Hats}/>

      </Switch>
    </div>
    
  );
}

export default App;
