const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const products = require('../Productos.json')

router.get('/producto/:sku', (request, response) => {
    const { sku } = request.params

    let array_result = []

    const result = products.filter((element) => {
        if(element.sku == sku){
            let v_sku = element.sku
            let nombre = element.nombre
            let precio = element.precio
            let url = element.url
            let marca = element.marca
            let descripcion = element.descripcion
            let iva = element.iva
            let descuento = element.descuento

            let precio_final = precio - (precio * descuento) + (precio * iva)

            const showProductMobile = {v_sku, nombre, precio, url, marca, descripcion, iva, descuento, precio_final}
            array_result.push(showProductMobile)

    
        }
    })
    response.json(array_result)
    
})

module.exports = router