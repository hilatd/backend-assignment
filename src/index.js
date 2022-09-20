const axios = require('axios').default;
const express = require('express')

const { 
    getAllActorsWithMultipleCharacters,
     getAllMoviesPerAllActors
     } = require('../src')


const app = express()


app.get('/moviesPerActor', async function (req, res) {
    const movies = await getAllMoviesPerAllActors();
    res.send(movies);
})

app.get('/', function (req, res) {
    res.send('Hello World')
})
  
app.listen(3000)
