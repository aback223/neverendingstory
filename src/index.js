import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//const rootReducer = combineReducers({usersReducer}); //import and add reducers
const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} /> 
  </Provider>, 
  document.getElementById('root')
);