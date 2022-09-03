const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const product = require('../Productos.json')

router.get('/producto', (request, response) => {
    response.json(product)
})

module.exports = router