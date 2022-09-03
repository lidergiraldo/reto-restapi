const { Router } = require('express')
const { result } = require('underscore')
const router = Router()
const _ = require('underscore')

const products = require('../Productos.json')

router.get('/producto/:sku', (request, response) => {
    const { sku } = request.params
    
    const result = products.filter((element) => element.sku == sku)
    response.json(result)
     
})

module.exports = router