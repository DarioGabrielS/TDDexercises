const reverse = require ('./reverser.js')

describe('Reverser', ()=>{

    it("Should work only if a parameter is passed", ()=>{
        expect(reverse()).toBe('Must provide a String')
    })
    it("Parameter must be a String", ()=>{

        const str = 5
        expect(reverse(str)).toBe('Parameter must be a string')
    })
    it("Given a string it should return it reversed", ()=>{

        expect(reverse('Ahoy!')).toBe('!yohA')
        
    })
})