const capicua = require('./capicua.js')

describe('Capicua', ()=>{

    const testNumber = 166
    const testCapicua = 23432
    const notANumber = 'hello'

    it('Parameter must be of type Number', ()=>{
        
        expect(capicua(notANumber)).toBe('Parameter should be of type Number')
    })

    it('Should check if number is equal to the same as it is backwards', ()=>{

        expect(capicua(testNumber)).toBeFalsy
        expect(capicua(testCapicua)).toBeTruthy
    })
})