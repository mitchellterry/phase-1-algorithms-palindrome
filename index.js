function isPalindrome(word) {

  let reversed = word.split("").reverse().join("")
  return word === reversed
  // Write your algorithm here
}
let word1 = "abba"
let word2 = "racecar"
let word3 = "a"
let word4 = "robot"
let word5 = "ab"

isPalindrome(word1)
isPalindrome(word2)
isPalindrome(word3)
isPalindrome(word4)
isPalindrome(word5)
/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;