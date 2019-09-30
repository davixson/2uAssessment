import {SHOW_PENDING_INVOICE, SELECT_INVOICE, APPROVE_INVOICE} from '../actions/approveInvoice';
import {CLOSE_ALERT} from '../actions/alertActions';

const defaultState = {
    pendingInvoiceList : [],
    selectedInvoice : null,
    showAlert: false,
    message: ''
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_PENDING_INVOICE: {
            return {
                ...state,
                pendingInvoiceList : action.payload
            }
        }
        case SELECT_INVOICE: {
            console.log("selected invoice ", action.payload)
            return {
                ...state,
                selectedInvoice : action.payload
            }
        }
        case APPROVE_INVOICE: {
            console.log("aprove invoice ", action.payload)
            return {
                ...state,
                pendingInvoiceList : state.pendingInvoiceList.filter(invoice => invoice._id !== state.selectedInvoice._id),
                selectedInvoice : null,
                showAlert: true,
                message: action.payload.message
            }
        }
        case CLOSE_ALERT: {
            console.log("close action", action.payload)
            return {
                ...state,
                showAlert: action.payload,
                message: ''
            }
        }
        
    
        default:
            return state;
            
    }
}

export default reducer;