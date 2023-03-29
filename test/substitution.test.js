// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution", () => {
  describe("input errors", () => {
    it("should return false if the given alphabet is not exactly 26 characters long", () => {
      const input = "carol baskin"
      const alphabet = "alksuteh"
      const actual = substitution(input, alphabet)
      
      expect(actual).to.be.false
    })
    
    it("should return false if there are any duplicate letters in the given alphabet", () => {
      const input = "tiger king"
      const alphabet = "alsjfuthendhtashfthendste"
      const actual = substitution(input, alphabet)
      
      expect(actual).to.be.false
    })
  })
  describe("encoding", () => {
   it("should encode a message by using the given substitution alphabet", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });
    
    it("should maintain spaces", () => {
      const input = "my message"
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
      const actual = substitution(input, alphabet)
      const expected = "yp ysii.rs"
      
      expect(actual).to.equal(expected)
    })
  })
  
  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
    
    it("should maintain spaces", () => {
      const input = "yp ysii.rs"
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
      const actual = substitution(input, alphabet, encode = false)
      const expected = "my message"
      
      expect(actual).to.equal(expected)
    })
  })
  
})