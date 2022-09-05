const { Router } = require('express')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')

router.delete('/producto/:sku', (request, response) => {
    const { sku } = request.params;

    _.each(products, (product, i) => {
        if(product.sku == sku){
            products.splice(i, 1)

            const delete_process = JSON.stringify(products)
            fs.writeFileSync('src/Productos.json', delete_process, 'utf-8', (error) => {
                if(error){
                    console.log(`Error: ${error}`)
                }
            })
            
            response.json('Product successfully removed')
        }
    })

})

module.exports = router