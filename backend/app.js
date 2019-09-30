const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =  express();

app.use(cors())
app.use(bodyParser.json());

//import Routes
const invoiceRoute = require('./routes/invoiceRoute');
const pendingInvoiceRoute = require('./routes/pendingInvoiceRoute');
app.use('/invoice', invoiceRoute);
app.use('/pending-invoice', pendingInvoiceRoute);
pendingInvoiceRoute



mongoose.connect(  
    'mongodb+srv://dev:test@123@cluster0-ucqof.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })

app.listen(3001); 