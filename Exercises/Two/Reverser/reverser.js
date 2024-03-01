
function reverse (str) {

   if(!str) return 'Must provide a String'
   if(typeof str != 'string') return 'Parameter must be a string'

    return str.split('').reverse().join('')

}

module.exports = reverse