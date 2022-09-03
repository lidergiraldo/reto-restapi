const { Router } = require('express')
const router = Router()
const _ = require('underscore')

router.get('/producto', (request, response) => {
    response.json({"t":"t"})
})

module.exports = router