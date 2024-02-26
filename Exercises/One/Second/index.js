//Programa una función que cuente el número de caracteres de una cadena de texto

function count (phrase) {

    if(typeof phrase != 'string'){
        return 'Value should be a string'
    }
    
    return phrase.length
}

module.exports = count