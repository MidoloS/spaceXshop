const { Router } = require('express');
const router = Router();

const { getProducts, uploadProducts, deleteProducts } = require('../controllers/products.controller')

router.route('/')
    .get(getProducts)
    .post(uploadProducts)

router.route('/:id')
    .delete(deleteProducts)

module.exports = router;