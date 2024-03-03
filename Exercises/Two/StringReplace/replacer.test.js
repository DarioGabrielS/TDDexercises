const replacer = require('./replacer.js')

describe('Replacer', ()=>{

    const paragraph = '1xyzx, 2xyzy, 3xyzz'
    const pattern = 'x'
    const notAText = 5

    it('Should receive 2 parameters', ()=>{
        
        expect(replacer(paragraph)).toBe('Should receive 2 parameters')

    })

    it('Both parameters should be of type String', ()=>{
        
        expect(replacer(paragraph, notAText)).toBe('Both parameters should be of type String')
        
    })

    it('Paragraph should be longer or equal to pattern', ()=>{

        expect(replacer(pattern, paragraph)).toBe('First String should be longer than second')
    })

    it('Should remove the pattern from the original text ', ()=>{

        expect(replacer(paragraph, pattern)).toBe('1yz, 2yzy, 3yzz')
        expect(replacer('  u!y ', '!y')).toBe('  u ')
    })

})