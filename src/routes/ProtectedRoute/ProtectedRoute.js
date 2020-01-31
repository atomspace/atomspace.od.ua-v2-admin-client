import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = props => {
  let authed = !!localStorage.getItem('token');
  return (
    <Route
      render={() => {
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
