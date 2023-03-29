// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
 
  const alphaKey = "abcdefghijklmnopqrstuvwxyz".split("") // standart alphabet
 
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    try {
      validAlphabetChecker(alphabet) // helper function to check valididity of input alphabet
      const codeKey = alphabet.toLowerCase().split("")
      return input
        .toLowerCase() //making everything lowercase to ignore capitals
        .split("") //split input string into array
        .map(
          (word) =>
            encode
              ? _mapTo(word, alphaKey, codeKey) // if encoding, map from base alphabet to coded
              : _mapTo(word, codeKey, alphaKey) // if decoding map from coded to base
        )
        .join(""); //join the array of letters back into a string
    } catch (error) {
      return false; //if any words throw an error, return false
    }
  }

  
  //Helper function that maps input to desired keys
  function _mapTo(input, fromKey, toKey) {
    if (input.match(/\s/)) return input; //if the character is a space leave it 
    const index = fromKey.indexOf(input); //finds the index of the matching character
    if (index === -1)
      throw new Error(`${input} not found in the provided alphabet!`) //if our alphabet doesn't contain that character, throw new Error()
    return toKey[index]; 
  }

  //Helper function to ensure provided alphabet is valid
  function validAlphabetChecker(alphabet) {
    if (alphabet.length !== 26)
      throw new Error(`Alphabet must be exactly 26 characters long!`) //checks if alphabet is 26 characters

    if ([...new Set(alphabet)].length !== alphabet.length)
      throw new Error(`Alphabet cannot contain repeating characters!`) // checks if alphabet has duplicates
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };