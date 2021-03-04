import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import SoloBoons from 'components/SoloBoons';
import Navbar from 'components/Navbar';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <div className='Main'>
        <Switch>
        <Route path='/Boons'>
          <SoloBoons />
        </Route>
        <Route path='/About'>
          TBD
        </Route>
        <Route path='/'>
          <Redirect to="/Boons" />
        </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
