import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import { LoginPage } from './routes/LoginPage/LoginPage';
import { MainPage } from './routes/Main/MainPage';
import './assets/styles/styles.scss';
import { ProtectedRoute } from './routes/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute>
          <Route path="/" component={MainPage} />
          <Route path="/merch" component={MainPage} />
          <Route path="/people" component={MainPage} />
          <Route path="/news" component={MainPage} />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
