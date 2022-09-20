const axios = require('axios').default;
const { movies, actors } = require('../dataForQuestions')
const api_key = `ac505a02032a33d65dd28b41f72182e1`;
const lang = 'en-US'


async function getMovieActors(movieId) {
    let response = [];
    try {
      response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=${lang}`);
      response = response?.data?.cast;
    } catch (error) {
      console.log(error);
    }
    return response;
  }

  async function getAllMoviesCast() {
      const moviesCasts = {};
    for (const [movie, id] of Object.entries(movies)) {
        const cast = await getMovieActors(id);
        moviesCasts[movie] = cast;
    }
    return moviesCasts;
  }

  const isActorInMovieCast = (actorName, cast) =>{
    return cast.filter(actor => actor.name === actorName).length > 0;
  }

  async function getAllMoviesPerActor (actorName) {
    const moviesPerActor = [];
    for (const [movie, id] of Object.entries(movies)) {
        const cast = await getMovieActors(id);
        if (isActorInMovieCast(actorName, cast)){
            moviesPerActor.push(movie)  
        } 
    }
    return { actorName : moviesPerActor};
  }

  async function getAllMoviesPerAllActors () {
      const moviesPerActors = {};
      const moviesCasts = await getAllMoviesCast();
      actors.forEach(actorName => {
        const moviesPerActor = [];
        for (const [movie, cast] of Object.entries(moviesCasts)) {
            if (isActorInMovieCast(actorName, cast)){
                moviesPerActor.push(movie)  
            } 
        }
        moviesPerActors[actorName] = moviesPerActor;
    });
    return moviesPerActors;
  }
  async function getAllActorsWithMultipleCharacters () {
    const moviesPerActors = {};
    const moviesCasts = await getAllMoviesCast();
    actors.forEach(actorName => {
      const moviesPerActor = [];
      for (const [movie, cast] of Object.entries(moviesCasts)) {
          if (isActorInMovieCast(actorName, cast)){
              const character = cast.find(actor => actor.name === actorName)?.character;
              moviesPerActor.push({movie, character})  
          } 
      }
      if (moviesPerActor.length > 1){
        moviesPerActors[actorName] = moviesPerActor;
      }
      
  });
  return moviesPerActors;
}
module.exports = {
    getMovieActors,
    getAllMoviesPerActor,
    getAllMoviesPerAllActors,
    getAllActorsWithMultipleCharacters
}
