import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TodoClassv1 from './TodoClassv1';
// import TodoHooksv1 from './TodoHooks';
import * as serviceWorker from './serviceWorker';
import MainView from './MainView';

ReactDOM.render(<MainView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
