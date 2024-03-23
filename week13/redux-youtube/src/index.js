import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, Store } from 'redux'

const ADD_AGE = 'ADD_AGE';

function addAge() {
  return {
    type: ADD_AGE
  }
}

function ageApp(state: {age: number;} = {age: 35}, action: {type: 'ADD_AGE'}) {
  if (action.type === ADD_AGE) {
    return {
      age: state.age + 1
    }
  }
  return state;
}

const store: Store<{age: number;}>  = createStore(ageApp);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
