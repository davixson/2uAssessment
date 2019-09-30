const express = require('express');
const router =  express.Router();
const InvoiceModel = require('../models/Invoice');

router.get('/', async(req, res) => {
    try {
        let invoiceList = await InvoiceModel.find({status: 'Pending'});
        res.json(invoiceList);
    } catch (error) {
        res.json({message: error});
    }
});


module.exports = router;
