const count = require('./index')

test('Type of data should be a String', ()=>{

    const phrase = 5

    expect(count(phrase)).toBe("Value should be a string")

})

test('Should count characters', ()=>{

    const phrase = 'hello'

    expect(count(phrase)).toBe(5)
})

test('Should count characters', ()=>{

    const phrase = 'hello world'

    expect(count(phrase)).toBe(11)
})