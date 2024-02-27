const separator = require('./index')

test('Two args should be passed', ()=>{

    const string = 'Habia una vez'
    const cut = ' '

    expect(separator(string)).toBe('Must pass 2 Strings as arguments')
})

test('First arg must be a String', ()=>{

    const string = 'Hola que tal'
    const cut = ' '

    expect(typeof string).toBe('string')
})

test('Second arg should be a String', ()=>{

    const string = 'Hola que tal'
    const cut = ' '

    expect(typeof cut).toBe('string')
})

test('Separator should exist in the String', ()=>{

    const string = 'Hola que tal'
    const cut = 'j'

    expect(separator(string, cut)).toBe('Separator character not found in the phrase')
})

