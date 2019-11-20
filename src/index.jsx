import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Nakon sto se odradi ovo, treba sve da se obrise
// I da se vrati na App, objasniti komponente, i zasto ih koristimo
const str = "Vuk";
const loguj = () => {
    return 'hello';
};

const element = <h2>Super {loguj()} {str}</h2>;
ReactDOM.render(<App ime="Pera" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
