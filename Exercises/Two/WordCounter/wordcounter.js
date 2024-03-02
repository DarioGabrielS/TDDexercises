/**
 * Counts the number of occurrences of a word within a paragraph'
 * 
 * @param {string} paragraph - Text in wich 'word' appears and needs to be counted
 * @param {string} word - String to look for in paragraph
 * @returns {number} - How many occurrences are
 */

function counter (paragraph, word) {
/**
 * @throws {string} - An error message if npt exactly 2 params are passed
 */
    if([...arguments].length != 2) return 'Two params need to be passed'
/**
 * @throws {string} - An error message if params are not Strings
 */
    if(typeof paragraph != 'string' || typeof word != 'string') return 'Both params need to be Strings'
/**
 * @throws {string} - An error message if word is shorter than the paragraph
 */
    if(paragraph.length < word.length) return `Cant look for ${word} inside of ${paragraph}`
/**
 * Generates a regular expression with the word to look for
 */
    const regex = new RegExp (`${word}`, 'g')

/**
 * Matches the occurrences, counts and then returns them
 */
    const result = paragraph.match(regex).length
    return result
}

module.exports = counter