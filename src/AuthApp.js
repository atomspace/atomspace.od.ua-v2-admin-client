import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './routes/LoginPage';
import Main from './routes/Main';
import './assets/styles/styles.scss';

function App() {
  let authed = !!localStorage.getItem('token');
  return !authed ? (
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <Redirect to='/login' />
    </Switch>
  )
    :
    (
      <Switch>
        <Route path='/' component={Main} exact />
        <Redirect to='/' />
      </Switch>
    );
}

export default App;
