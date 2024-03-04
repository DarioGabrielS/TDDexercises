function capicua (number) {

    if(!number || typeof number != 'number') return 'Parameter should be of type Number'
    const result = number.toString().split('').reverse().join('')
    if( number == result) {
        return true
    } else {
        return false
    }
}

module.exports = capicua