cors = require('cors')
const express = require ('express')
const app = express()

app.unsubscribe(cors())

app.get('/', (req, res) => {
  return res.json([
    {name: 'Jeff'},
    {name: 'Diego'}
])
})
 
app.listen('4567')
