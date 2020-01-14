import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './routes/LoginPage';
import Main from './routes/Main';
import './assets/styles/styles.scss';

let authed = localStorage.getItem('user') === null;
if (authed) localStorage.setItem('logged', false);
function App() {
  return !authed ? (
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <Redirect to='/login' />
    </Switch>
  )
    :
    (
      <Switch>
        <Route path='/:pagename' component={LoginPage} exact />
        {/* <Route path='/logout' component={ LogoutPage } /> */}
        <Redirect to='/' />
      </Switch>
    );
}

export default App;
