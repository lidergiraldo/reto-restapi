const { Router } = require('express')
const { isString, isNumber } = require('underscore')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')

router.put('/producto/:sku', (request, response) => {
    const { sku } = request.params
    const { nombre, precio, url, marca, descripcion, iva, descuento, inventario } = request.body

    if(!nombre || !isString(nombre)){
        response.status(403)
        response.send({error: 'nombre invalido!'})
    }
    if(!precio || !isNumber(precio)){
        response.status(403)
        response.send({error: 'precio invalido!'})
    }
    if(!url || !isString(url)){
        response.status(403)
        response.send({error: 'url invalida!'})
    }
    if(!marca || !isString(marca)){
        response.status(403)
        response.send({error: 'marca invalida!'})
    }
    if(!descripcion || !isString(descripcion)){
        response.status(403)
        response.send({error: 'descripcion invalida!'})
    }
    if(!iva || !isNumber(iva)){
        response.status(403)
        response.send({error: 'iva invalido!'})
    }
    if(!descuento || !isNumber(descuento)){
        response.status(403)
        response.send({error: 'descuento invalido!'})
    }
    if(!inventario || !isNumber(inventario)){
        response.status(403)
        response.send({error: 'Registro de inventario invalido!'})
    }

    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0')
    let month = `${(date.getMonth()+1)}`.padStart(2,'0')
    let year = date.getFullYear()
    const fecha_actual = `${year}-${month}-${day}`

    let position = products.findIndex((element) => element.sku == sku)

    const updateProduct = {sku, ...request.body, fecha_actual}
    products.splice(position, 1, updateProduct)

    const update_process = JSON.stringify(products)
    fs.writeFileSync('src/Productos.json', update_process, (error) => {
        if(error){
            console.log(`Error: ${error}`)
        }
    })
    response.json('Update Product')
})

module.exports = router