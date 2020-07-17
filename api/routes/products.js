const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handelling Get request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handelling Post request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the Special ID',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an Id ID'
        });
    }

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update Product',
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Product',
    });
});

module.exports = router;