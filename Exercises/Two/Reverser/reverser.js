 /**
 * Reverses a String.
 *
 * @param {string} str - String to reverse.
 * @returns {string} - The string reversed.
 * @throws {string} - An error message if a string is not given or param is not of a string type.
 */

function reverse (str) {

/**
* @throws {string} - Error message if string is not provided
*/
   if(!str) return 'Must provide a String'
/**
* @throws {string} - Error message if string is not provided
*/
   if(typeof str != 'string') return 'Parameter must be a string'
/**
* @returns - Parameter is splited character by character, reversed and then joined again before returning it  
*/
    return str.split('').reverse().join('')

}

module.exports = reverse