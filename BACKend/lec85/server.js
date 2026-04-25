console.log("hello")

var slugify = require('slugify')

let a = slugify('RAUT ji') // some-string
console.log(a)


// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b)