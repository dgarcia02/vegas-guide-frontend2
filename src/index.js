import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
// this connects our store to the App
import { Provider } from 'react-redux';

// Store -> Global State
// this is combining all reducers and making it available in store & App
// the 2nd parameter is to access the redux dev tools
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
