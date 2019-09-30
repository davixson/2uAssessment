export const APPROVE_INVOICE = 'approve_invoice';
export const SHOW_PENDING_INVOICE = 'show_pending_invoice';
export const SELECT_INVOICE = 'select_invoice';


const listPendingInvoice = () => {
    return (dispatch, getState) => {
        fetch('http://localhost:3001/pending-invoice')
        .then(response => response.json())
        .then(data => {
            console.log("respuesta es" + data);
            return dispatch({type: SHOW_PENDING_INVOICE, payload: data});
        })
    }
}

const approveInvoice = (invoice) => {

    if(invoice) {
        let url = 'http://localhost:3001/invoice/' + invoice._id + '/approve';
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        return (dispatch, getState) => {
            fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log("despues de aprobar" + data);
                return dispatch({type: APPROVE_INVOICE, payload: data});
            })
        }
    } else {
        return {
            type: '',
            payload: null
        }
    }
    
}

//TODO add code for websockets 

const selectInvoice = invoice => {
    return {
        type: SELECT_INVOICE,
        payload: invoice
    }
}

export default {listPendingInvoice, approveInvoice, selectInvoice};