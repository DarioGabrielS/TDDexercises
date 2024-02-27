function subStringer (str, characters) {

    if ([...arguments].length != 2) return 'Must provide a String as first arg and a Number as second'
    if (typeof str !='string') return 'First arg must be a String'
    if (typeof characters != 'number') return 'Second arg must be a Number'
    if (str.length < characters) return `String should be longer than ${characters} to be able to cut`

    return str.slice(0,characters)

}

module.exports = subStringer