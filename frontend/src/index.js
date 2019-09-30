import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import PendingInvoices from './components/pendingInvoices'
import store from './redux/store'

const Root = (
    <Provider store={store}>
        <div>
            <PendingInvoices></PendingInvoices>
        </div>
    </Provider>
    
);

ReactDOM.render(Root, document.getElementById('root'));