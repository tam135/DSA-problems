// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//recursive
/* function reverse(str) {
     if (str === "") {
       return "";
     }
     return reverse(str.substr(1)) + str.charAt(0)
}
*/


/*  function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}  */

/* function reverse(str) {
    return str.split('').reduce((reversed, character) => {
      return character + reversed;
    }, '')
} */

/* function reverse(str) {
  let reversed = '';

  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
} */



module.exports = reverse;
