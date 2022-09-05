const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const products = require('../Productos.json')

//Endpoint Consultar producto móvil
router.get('/producto', (request, response) => {
    let array_result = []
    _.each(products, (product, i) => {
        let sku = product.sku
        let nombre = product.nombre
        let url = product.url
        let marca = product.marca
        let inventario = product.inventario

        let precio = product.precio
        let descuento = product.descuento
        let iva = product.iva

        let precio_final = precio - (precio * descuento) + (precio * iva)

        if(inventario > 0){
            const showProductsM = { sku, nombre, url, marca, precio_final}
            array_result.push(showProductsM) 
        }
    })
    response.json(array_result)

})

module.exports = router