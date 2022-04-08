const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should be an array', () => {
        expect(typeof shuffleArray.).toBe('array')
    })
    test('shuffleArray is the same length', () => {
        expect(shuffleArray[3]).not.toBe(shuffleArray[3])
    })
})