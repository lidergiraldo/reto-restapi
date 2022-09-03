const { Router } = require('express')
const router = Router()

router.get('/producto', (request, response) => {
    response.json({"t":"t"})
})

module.exports = router