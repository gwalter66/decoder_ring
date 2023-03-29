// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar")

describe("caesar", () => {
  describe("input errors", () => {
    it("should return false if the shift amount is 0", () => {
     const message = "robin williams"
     const shift = 0
     const actual = caesar(message, shift)
  
     expect(actual).to.be.false
     })
  
    it("should return false if the shift amount is < -25", () => {
      const message = "robin williams"
      const shift = -30
      const actual = caesar(message, shift)

      expect(actual).to.be.false
    })

    it("should return false if the shift amount is > 25", () => {
      const message = "robin williams"
      const shift = 30
      const actual = caesar(message, shift)

      expect(actual).to.be.false
    })
  })
  
  describe("encoding", () => {
    it("should maintain spaces and other nonalphabetic characters", () => {
      const message = "robin williams"
      const shift = 7
      const actual = caesar(message, shift)
      const expected = "yvipu dpssphtz"

      expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
      const message = "Brian Boitano"
      const shift = 4
      const actual = caesar(message, shift)
      const expected = "fvmer fsmxers"

      expect(actual).to.equal(expected)
    })
    
    it("properly handle shift that cause letters to wrap around the alphabet", () => {
      const message = "zebra mountain"
      const shift = 9
      const actual = caesar(message, shift)
      const expected = "inkaj vxdwcjrw"
      
      expect(actual).to.equal(expected)
    })
  })
  
  describe("decoding", () => {
     it("should maintain spaces and other nonAlphabetic characters", () => {
      const message = "yvipu dpssphtz"
      const shift = 7
      const actual = caesar(message, shift, encode = false)
      const expected = "robin williams"
    
      expect(actual).to.equal(expected)
     })
    
    it("should ignore capital letters", () => {
      const message = "Yvipu dpssphtz"
       const shift = 7
      const actual = caesar(message, shift, encode = false)
      const expected = "robin williams"
    
      expect(actual).to.equal(expected)
    })
    
    it("properly handle shift that cause letters to wrap around the alphabet", () => {
      const message = "inkaj vxdwcjrw"
      const shift = 9
      const actual = caesar(message, shift, encode = false)
      const expected = "zebra mountain"
      
      expect(actual).to.equal(expected)
    })
  })
})    