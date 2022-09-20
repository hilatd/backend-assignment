const express = require('express')

const { 
    getAllActorsWithMultipleCharacters,
     getAllMoviesPerAllActors
     } = require('./service')


const app = express()


app.get('/moviesPerActor', async function (req, res) {
    const movies = await getAllMoviesPerAllActors();
    res.send(movies);
})

app.get('/actorsWithMultipleCharacters', async function (req, res) {
    const actors = await getAllActorsWithMultipleCharacters();
    res.send(actors);
})

app.get('/', function (req, res) {
    res.send('Marvel Lovers DB')
})
  
app.listen(3000)
