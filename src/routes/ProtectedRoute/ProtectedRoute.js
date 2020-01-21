import React from 'react';
import history from '../../history';
import { LoginPage } from '../LoginPage/LoginPage';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = props => {
  let authed = !!localStorage.getItem('token');
  console.log('ProtectedRoute');
  return (
    <Route
      render={() => {
        console.log(!authed);
        return !authed ? (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ) : (
          props.children
        );
      }}
    />
  );
};
