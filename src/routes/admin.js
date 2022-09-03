const { Router } = require('express')
const { isString, isNumber } = require('underscore')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')

router.post('/producto', (request, response) => {
    const { sku, nombre, precio, url, marca, descripcion, iva, descuento, inventario} = request.body
    
    if(!sku || !isString(sku)){
        response.status(403)
        response.send({error: 'sku invalido!'})
    }

    _.each(products, (product, i) => {
        if(product.sku == sku){
            response.status(403)
            response.send({error: 'El sku ya ha sido registrado'})
        }
    })

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

    const insertProductNew = { ...request.body, fecha_actual }
    products.push(insertProductNew)

    const product_process = JSON.stringify(products)
    fs.writeFileSync('src/Productos.json', product_process, (error) => {
        if(error){
            console.log(`Error: ${error}`)
        }
    })
    response.json('Saved Product')
})

module.exports = router