const express = require('express')
const bodyParser = require('body-parser')
const lc = require('./listController')

const app = express();

app.use(bodyParser.json())

//routes
app.get('/api/list', lc.getList)
app.post('/api/list', lc.addItem)
app.delete('/api/list/:id', lc.deleteItem)
app.put('/api/list/:id', lc.updateItem)

app.listen(4000, () => {
    console.log('Listening on port 4000')
})