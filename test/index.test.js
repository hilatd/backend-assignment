const { getMovieActors,
    getAllMoviesPerActor, 
    getAllActorsWithMultipleCharacters,
     getAllMoviesPerAllActors
     } = require('../src')
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
    it('should get movies per actor', async() => {
        let res = await getAllMoviesPerActor(actors[1]);
        expect(res).toHaveLength(13);
    })
    it('should get empty list this is not marvel actor', async() => {
        let res = await getAllMoviesPerActor('nan');
        expect(res).toHaveLength(0);
    })
    it('should get movies per all actors', async() => {
        let res = await getAllMoviesPerAllActors();
        expect(res).toHaveLength(actors.length);
    })
    it('should get actors who play more than 1 marvel char', async() => {
        let res = await getAllActorsWithMultipleCharacters();
        expect(res).toHaveLength(13)
    })
})
