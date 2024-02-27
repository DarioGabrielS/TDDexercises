function separate (str, separator) {

    if([...arguments].length != 2) return 'Must pass 2 Strings as arguments'
    if( typeof str != 'string') return 'First arg must be a String'
    if( typeof separator != 'string') return 'Second arg must be a String'
    if(!str.includes(separator)) return 'Separator character not found in the phrase'

    return str.split(`${separator}`)
}

module.exports = separate