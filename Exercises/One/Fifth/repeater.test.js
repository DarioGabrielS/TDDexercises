const repeater  = require ("./repeater")

describe('Repeater', ()=>{

    it('repeater should be a function',()=>{
        expect(typeof repeater).toBe('function')
    })
    it('Should take 2 arguments', ()=>{
        const first = 'Hi!'
        expect(repeater(first)).toBe('2 arguments should be passed')
    })
    it('First arg needs to be a String', ()=>{

        const text = 2
        const times = 3

        expect(repeater(text,times)).toBe('First arg needs to be a string and Second a number')
    })
    it('Second arg needs to be a Number', ()=>{

        const text = 'Hi'
        const times = 'hi'

        expect(repeater(text,times)).toBe('First arg needs to be a string and Second a number')
        
    })
    it('Should repeat the text n times', ()=>{

        const text = 'Hi'
        const times = 3

        expect(repeater(text,times)).toBe('Hi Hi Hi')
        
    })
})