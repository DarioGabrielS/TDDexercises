/**
 * Removes a pattern from a text
 * 
 * @param {string} paragraph - A text from wich occurrences of the pattern will be removed
 * @param {string} pattern - The String to remove from paragraph
 * @returns {string} - The paragraph with the pattern occurrences removed
 * @throws {string} - An error message if something went wrong
 */

function replacer (paragraph, pattern) {

/**
 * @throws {string} - An error message if not exactly 2 parameters are passed 
 */
if([...arguments].length != 2) return "Should receive 2 parameters"

/**
 * @throws {string} - An error message if either parameter is not a String
 */
if(typeof paragraph != 'string' || typeof pattern != 'string') return 'Both parameters should be of type String'

/**
 * @throws {string} - An error message if paragraph is shorter than pattern
 */
if(paragraph.length < pattern.length) return "First String should be longer than second"

/**
 * A regular expression is created from the pattern to look for in the paragraph and eliminate it
 */
const regex = new RegExp(`(${pattern})`, 'g')

/**
 * Regular expression is replaced with an empty string performing a deletion
 */
return paragraph.replace(regex, '')

}

module.exports = replacer