import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { LoginPage } from './routes/LoginPage/LoginPage';
import { MainPage } from './routes/Main/MainPage';
import { NewsPage } from './routes/NewsPage/NewsPage';
import './assets/styles/styles.scss';
import './assets/styles/normalize/normalize.scss';
import { ProtectedRoute } from './routes/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute>
          <Route path="/merch" component={MainPage} exact />
          <Route path="/news" component={NewsPage} exact />
          <Route path="/members" component={MainPage} exact />
          <Route path="/orders" component={MainPage} exact />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
