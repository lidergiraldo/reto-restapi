const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const products = require('../Productos.json')

//Endpoint Listar productos
router.get('/producto', (request, response) => {
    let arry_result = []
    _.each(products, (product, i) => {
        let sku = product.sku
        let nombre = product.nombre
        let precio = product.precio
        let url = product.url
        let marca = product.marca
        let iva = product.iva
        let inventario = product.inventario

        const showProducts = {sku, nombre, precio, url, marca, iva, inventario}
        arry_result.push(showProducts)

    })
    response.json(arry_result)
})

module.exports = router