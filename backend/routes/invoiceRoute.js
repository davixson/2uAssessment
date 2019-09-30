const express = require('express');
const router =  express.Router();
const InvoiceModel = require('../models/Invoice');

router.get('/', async(req, res) => {
    try {
        let invoiceList = await InvoiceModel.find();
        res.json(invoiceList);
    } catch (error) {
        res.json({message: error});
    }
});


router.post('/', async (req, res) => {
    //console.log(req.body);
    const invoice = new InvoiceModel({
        invoice_number: req.body.invoice_number,
        total: req.body.total,
        currency: req.body.currency,
        invoice_date: req.body.invoice_date,
        due_date: req.body.due_date,
        vendor_name: req.body.vendor_name,
        remittance_address: req.body.remittance_address,
        status: 'Pending'
    });

    try {
        let savedInvoice = await invoice.save();
        res.json({message: 'Invoice submitted successfully!.'});    

        //TODO weksockets code to send the new invoice to client
        
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/:invoiceId/approve', async (req, res) => {
    try {
        let updatedInvoice = await InvoiceModel.updateOne(
            {_id: req.params.invoiceId}, 
            { $set: {status : 'Approved'}}
        );
        res.json({message: 'Invoice approved successfully!.'})
    } catch (err) {
        res.json()
    }
});

module.exports = router;

