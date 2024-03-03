function replacer (paragraph, pattern) {

if([...arguments].length != 2) return "Should receive 2 parameters"
if(typeof paragraph != 'string' || typeof pattern != 'string') return 'Both parameters should be of type String'

if(paragraph.length < pattern.length) return "First String should be longer than second"

const regex = new RegExp(`(${pattern})`, 'g')

return paragraph.replace(regex, '')

}

module.exports = replacer