import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import formReducer from './components/reducers/formReducer'
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from 'redux';


const rootReducer = combineReducers({
    cartReducer: cartReducer,
    formReducer: formReducer,
    
})

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
console.log("index.js - store =", store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
 ); 