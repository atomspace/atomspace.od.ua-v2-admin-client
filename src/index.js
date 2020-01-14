import React from 'react';
import ReactDOM from 'react-dom';
import AuthApp from './AuthApp';
import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <AuthApp />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
