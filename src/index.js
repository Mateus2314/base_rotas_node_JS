var express = require('express')
var app = express()

app.get('/', (request, resp) => {
    return resp.json([
        'Projeto 1',
        'Projeto 2'
    ])
} )

app.post('/', (request, resp ) => {
    return resp.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/:id', (request, resp) => {
    return resp.json([
        'Projeto 2',
        'Projeto 3'
    ])
} )

app.delete('/:id', (request, resp ) => {
    return resp.json([
        'Projeto 2',
        'Projeto 3'
    ])
})

app.listen(3333, () => {
    console.log("Back-end started 😁")
} )