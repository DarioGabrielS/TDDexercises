
function repeater (str, times) {

    if([...arguments].length != 2) return '2 arguments should be passed'
    if(typeof str != 'string' || typeof times != 'number') return 'First arg needs to be a string and Second a number'

    const wordToRepeat = str+' '
    let repeatedWords = ''
    for (let i=0;i<times;i++){
    	repeatedWords += wordToRepeat
    }
    return repeatedWords.trim()
}

module.exports = repeater