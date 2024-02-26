const sum = require( './index')

test('sum of 2 and 3 should return 5', ()=>{

const a = 5;
const b = 3;

const result = sum(a,b)

expect(result).toBe(8)
})

test('Variables a and b should be numbers', ()=>{

const a = 5;
const b = 3;

expect(typeof a && typeof b).toBe('number')

})