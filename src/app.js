const { urlencoded } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')

//Settings
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'))
app.use(urlencoded({extended: false}))
app.use(express.json())

//routes
app.use('/admin/' ,require('./routes/admin'))
app.use(require('./routes/mobile'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})