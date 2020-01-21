import React from 'react';
import ReactDOM from 'react-dom';
import AuthApp from './AuthApp';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
    return (
        <Router>
            <AuthApp />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
