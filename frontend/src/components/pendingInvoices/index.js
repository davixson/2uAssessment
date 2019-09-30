import React, {Component} from 'react';
import {connect} from 'react-redux';
import invoiceActions from '../../redux/actions/approveInvoice'
import Alert from '../alert'

class PendingInvoices extends Component {

    state = {
        showAlert : false
    }

    componentDidMount() {
        this.props.listPendingInvoice();
    }

    hiddeAlert() {
        console.log("llamo a la alerta")
        this.setState({
            showAlert : false
        });
    }

    formatDate(stringDate) {
        let date = new Date(stringDate);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    }

    render() {
        const {pendingInvoiceList, selectedInvoice,showAlert} = this.props;
        let alert;
        if(showAlert) {
            alert = <Alert hiddeAlert={this.hiddeAlert.bind(this)}></Alert>;
        }
        return (
            <div> 
                {alert}       
                <div className="container">
                    <h2>Unapproved Invoices</h2>
                    <div className="row mb-1 d-flex flex-row-reverse">
                        <button type="button" className="btn btn-primary"
                            disabled = {selectedInvoice == null} 
                            onClick={()=>(this.props.approveInvoice(selectedInvoice))}>
                                Approve
                        </button>
                    </div>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr >
                                    <th scope="col" className="text-left">Invoice Number</th>
                                    <th scope="col" className="text-left">Vendor Name</th>
                                    <th scope="col" className="text-left">Vendor Address</th>
                                    <th scope="col" className="text-right">Invoice Total</th>
                                    <th scope="col" className="text-center">Invoice Date</th>
                                    <th scope="col" className="text-center">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pendingInvoiceList.map(invoice => (
                                        <tr key={invoice._id} onClick={()=>(this.props.selectInvoice(invoice))}
                                            className={selectedInvoice !== null && selectedInvoice._id === invoice._id ? 'table-active' : ''}>
                                            <td className="text-left">{invoice.invoice_number}</td>
                                            <td className="text-left">{invoice.vendor_name}</td>
                                            <td className="text-left">{invoice.remittance_address}</td>
                                            <td className="text-right">{invoice.total.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                            <td className="text-center">{this.formatDate(invoice.invoice_date)}</td>
                                            <td className="text-center">{this.formatDate(invoice.due_date)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>  
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pendingInvoiceList : state.invoiceReducer.pendingInvoiceList,
        selectedInvoice: state.invoiceReducer.selectedInvoice,
        showAlert: state.invoiceReducer.showAlert
    }
}

const functionsss = {
    listPendingInvoice: invoiceActions.listPendingInvoice,
    selectInvoice: invoiceActions.selectInvoice,
    approveInvoice: invoiceActions.approveInvoice
}

const wrapper = connect(mapStateToProps, functionsss);
const component = wrapper(PendingInvoices);
export default component;