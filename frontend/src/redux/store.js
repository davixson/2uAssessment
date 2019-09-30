import {createStore, combineReducers, applyMiddleware} from 'redux';
import invoices from './reducers/invoices';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    invoiceReducer : invoices
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;