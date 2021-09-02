import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';

// this is combining all reducers and making it available in store & App
const store = createStore(allReducers)

// now the app.js has access to the store using the provider component and passing in the store prop
ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
