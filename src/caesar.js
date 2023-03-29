// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    try {
      if (!shift || shift < -25 || shift > 25) //throws error if shift amount is bad
        throw new Error(`Shift must be defined and be between -25 and 25`) 
      if (typeof input !== "string") // throws error if input is not a string
        throw new Error(`Input provided must be a defined`)
      shift *= encode ? 1 : -1 // must shift in oppsite direction when decoding

      return input 
        .toLowerCase() // set everything to lower case in order to ignore capitals
        .split("") // split input into seprate characters
        .map((character) => shifter(character, shift)) //map split input to shifted keys
        .join(""); // join message
    } catch (error) {
      //console.log(`${error}`) //uncomment for debugging
      return false // return false if there is an error
    }
  }

  //Helper function 
  function shifter(character, shift) {
    const key = "abcdefghijklmnopqrstuvwxyz".split("") // alphabet array as key

    if (!character.match(/[a-z]/)) return character // if character is not a letter return it

    let index = key.indexOf(character) // find index of original letter
    let shifted = (((index + shift) % 26) + 26) % 26 // change the index number to the desired letter
    return key[shifted] //return the shifted keys
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar }

