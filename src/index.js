const axios = require('axios').default;
const api_key = `ac505a02032a33d65dd28b41f72182e1`;
const lang = 'en-US'

const sayHey = (name) => {
    return `Hey ${name}`
}

async function getMovieActors(movieId) {
    let response = [];
    try {
      response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=${lang}`);
      response = response?.data?.cast;
    } catch (error) {
      console.error(error);
    }
    return response;
  }

module.exports = {
    sayHey,
    getMovieActors
}
