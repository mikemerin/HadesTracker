import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Boons from 'components/Boons';
import Navbar from 'components/Navbar';

const App = (): JSX.Element => (
  <div className="App">
    <Navbar />
    <div className='Main'>
      <Switch>
      <Route path={['/Boons/Main', '/Boons/Other', '/Boons/Chaos', '/Boons/Weapons']}>
        <Boons />
      </Route>
      <Route path='/About'>
        TBD
      </Route>
      <Route path='/'>
        <Redirect to="/Boons/Main" />
      </Route>
      </Switch>
    </div>
  </div>
);

export default App;
