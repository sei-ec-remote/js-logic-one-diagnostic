const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

const jslogic = require('../exercises/js-logic')

describe('Q1: Sum of numbers', () => {
	it('Takes in a number and returns the sum of all numbers below it that are multiples of 3 or 5', () => {
		const result = jslogic.sumOfNumbers(10)
        expect(result).to.equal(23)
	})
})

describe('Q2: Vowel count', () => {
	it('Return the count of vowels in a string', () => {
		const result = jslogic.vowelCount('cat')
		expect(result).to.equal(1)
	})
})

describe('Q3: String reverse', () => {
	it('Return a string that has all words over the length of 5 reversed', () => {
		const result = jslogic.stringReverse('hey there person')
		expect(result).to.equal('hey ereht nosrep')
	})
})
