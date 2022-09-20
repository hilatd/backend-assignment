const { sayHey, getMovieActors } = require('../src')
const { movies } = require('../dataForQuestions')

describe('sayHey', () => {
    it('should say Hey to given name', () => {
        expect(sayHey('John')).toBe('Hey John')
    })
    it('should get movie cast', async() => {
        let res = await getMovieActors(movies['Iron Man']);
        expect(res).toHaveLength(64)
    })
})
