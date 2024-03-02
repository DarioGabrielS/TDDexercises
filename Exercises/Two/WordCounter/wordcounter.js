/**
 * Function that will look for and count how many times 'word' appears in 'paragraph'
 * 
 * @param {string} paragraph - Text in wich 'word' appears and needs to be counted
 * @param {string} word - String to look for in paragraph
 */

function counter (paragraph, word) {

    if([...arguments].length != 2) return 'Two params need to be passed'
    if(typeof paragraph != 'string' || typeof word != 'string') return 'Both params need to be Strings'
    if(paragraph.length < word.length) return `Cant look for ${word} inside of ${paragraph}`

    const regex = new RegExp (`${word}`, 'g')
    const result = paragraph.match(regex).length
    return result
}

module.exports = counter