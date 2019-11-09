import App from './main/js/app.js';
import Login from './main/js/components/login.js'
import store from './main/js/store/store.js';
import {Provider} from 'react-redux';

const React = require('react');
const ReactDOM = require('react-dom');


ReactDOM.render(<Provider store={store}>
		<App />
		</Provider>,
		document.getElementById("react")
);


