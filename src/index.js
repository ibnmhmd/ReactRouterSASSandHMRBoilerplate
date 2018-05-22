import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));


/********** activating Hot Module Replacement *****/
if(module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(<NextApp />,  document.getElementById('root'));
    })
}

registerServiceWorker();

