const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const products = require('../Productos.json')
const purchase_orders = require('../Ordenes.json')

router.get('/ordenes', (request, response) => {
    let array_result = []
    let array_productos_final = []
    _.each(purchase_orders, (order, i) => {
        let id = order.id
        let nombre = order.nombre
        let apellido = order.apellido
        let total = order.total
        let array_productos = order.productos


        let info_product = {}
        _.each(array_productos, (producto, i) => {
            let prod = products.filter((element) => {
                if(element.sku = array_productos[i]){
                    let sku = element.sku
                    let nombre = element.nombre
                    let marca = element.url
                    let url = element.url

                    info_product = { sku, nombre, marca, url }
                        
                }
                
            })   
            const showOrders = { id, nombre, apellido, total, info_product}
            array_result.push(showOrders)
        })

    })
    response.json(array_result)
})

module.exports = router