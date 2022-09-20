const { getMovieActors,
    getAllMoviesCast,
    getAllActorsWithMultipleCharacters,
     getAllMoviesPerAllActors
     } = require('../src/service')
const { movies, actors } = require('../dataForQuestions')

describe('marvel', () => {
    
    it('should get movie cast', async() => {
        let res = await getMovieActors(movies['Iron Man']);
        expect(res).toHaveLength(64);
    })
    it('should get empty movie cast - not real movie', async() => {
        let res = await getMovieActors(1);
        expect(res).toHaveLength(0);
    })
    it('should get all movies casts', async() => {
        let res = await getAllMoviesCast();
        expect(Object.keys(res).length).toBe(Object.keys(movies).length);
    })
    it('should get movies per all actors', async() => {
        let res = await getAllMoviesPerAllActors();
        expect(Object.keys(res).length).toBe(actors.length);
    })
    it('should get actors who play more than 1 marvel char', async() => {
        let res = await getAllActorsWithMultipleCharacters();
        expect(Object.keys(res["Chris Evans"]).length).toBe(4)
    })
})
