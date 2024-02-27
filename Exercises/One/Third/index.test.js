const subFunction = require('./index')

test('Should work if str is a string', ()=>{

const text = 5
const number = 'River Plate'

expect(subFunction(text, number)).toBe('First arg must be a String')
})

test('Should work only if 2 args are passed', ()=>{

const text = 'River Plate'
const number = 5

expect(subFunction(text)).toBe('Must provide a String as first arg and a Number as second')
})

test('Should not work if second arg is not a number', ()=>{

    const text = 'River Plate'
    const number = 5

expect(typeof number).toBe('number')
})
test('Should not work if string is shorter than number', ()=>{

    const text = 'River Plate'
    const number = 15

expect(subFunction(text, number)).toBe(`String should be longer than ${number} to be able to cut`)
})