const mongoose = require('mongoose');
/*
"invoice_number": "12345",
"total": "199.99",
"currency": "USD",
"invoice_date": "2019-08-17",
"due_date": "2019-09-17",
"vendor_name": "Acme Cleaners Inc.",
"remittance_address": "123 ABC St. Charlotte, NC 28209"
*/
const InvoiceSchema = mongoose.Schema({
    invoice_number : {
        type: String,
        required: true,
        unique: true,
    },
    total: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    invoice_date: {
        type: Date,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    vendor_name: {
        type: String,
        required: true
    },
    remittance_address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Invoices', InvoiceSchema);