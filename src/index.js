import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';

let defaultStoreValue = {
  userID : ''
}

function storeChanger(storeValue = defaultStoreValue, action){
  if(action.type === 'change'){
    let copy = storeValue;

    switch(action.payload.variableType){
      case 'userID' :
        copy.userID = action.payload.changeData;
        break;
    }
    return copy;
  }
  else
    return storeValue;
}

let store = createStore(storeChanger);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
