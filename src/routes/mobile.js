const { Router } = require('express')
const router = Router()

router.get('/producto', (request, response) => {
    response.json({"s":"s"})
})

module.exports = router