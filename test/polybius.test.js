// Write your tests here!
const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius", () => {
  describe("encoding", () => {
    it("should encode both i and j as 42", () => {
       const message ="jingle"
       const actual = polybius(message)
       const expected = "424233221351"

       expect(actual).to.equal(expected)
     })
   
    it("should maintain spaces", () => {
        const message = "benjamin barker"
        const actual = polybius(message)
        const expected = "2151334211234233 211124525124"

        expect(actual).to.equal(expected)
    })
    
    it("should ignore capital letters", () => {
       const message = "Destiny"
       const actual = polybius(message)
       const expected = "41513444423345"

       expect(actual).to.equal(expected)
     })
  })
  
  describe("decoding", () => {
    it("should translate 42 to i/j", () => {
        const message = "41513444423345"
        const actual = polybius(message, false)
        const expected = "dest(i/j)ny"
 
        expect(actual).to.equal(expected)
    })
    
    it("should maintain spaces", () => {
        const message = "2151334211234233 211124525124"
        const actual = polybius(message, false)
        const expected = "ben(i/j)am(i/j)n barker"

        expect(actual).to.equal(expected)
    })
    
    it("should ignore capital letters", () => {
        const message = "41513444423345"
        const actual = polybius(message, false)
        const expected = "dest(i/j)ny"
 
        expect(actual).to.equal(expected)
    })
  })
})