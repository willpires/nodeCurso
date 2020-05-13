const express = require('express')
const parser = require('body-parser')
const api = express()

api.use(parser({extended: true}))
api.get('/', (req, res) =>{
    res.status(200).send('Ola mundo')
})

api.post('/',(req, res) =>{
    res.status(201).send(req.body)
})

api.put('/:id',(req, res) =>{
    res.status(202).send({
        codigo: req.params.id,
        corpo: req.body
    })
})

api.delete('/:id', (req, res) =>{
    res.status(204).send(req.params.id)
})

api.listen(3000,() => {
    console.log("will")
})