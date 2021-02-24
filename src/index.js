import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    form: formReducer,
    
})

const store = createStore(rootReducer);
console.log("index.js - store =", store.getState())

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
 ); registerServiceWorker();