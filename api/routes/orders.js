const express = require('express');
const router = express.Router();
const json2csv = require('json2csv').parse;
var firebase = require('firebase');
const fs = require('fs')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});
// router.post('/', (req, res, next) => {
//     res.status(201).json({
//         message: 'Order was created'
//     });
// });
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order:order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Details',
        id: req.param.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted',
        id: req.param.orderId
    });
});

module.exports = router;