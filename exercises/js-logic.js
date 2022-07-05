/*
=============== JavaScript Logic Challenge I ==================

GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.

TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(js-logic-one-diagnostic)
      Don't worry about capitalization.
*/

/*
Question 1

Finish the function. Using the number that is passed in, `num`, first find all the numbers that are less than it (`num`) that are multiples of 3 or 5, then return the sum of these numbers. 

Ex: If the number passed in is 10; 3, 5, 6, and 9 are both less than 10 and multiples of 3 or 5. The sum of these numbers are 23
*/
const sumOfNumbers = (num) => {
	let sum = 0
	for (let i = 0; i < num; i ++) {
		if (i % 5 === 0 || i % 3 === 0) {
			sum += i
		}
	}
	return sum
}
console.log(sumOfNumbers(10))
/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	const vowels = str.split('').filter(char => {
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			return char
		}
	})
	return vowels.length
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	const split = str.split(' ').map(word => {
		if (word.length >= 5) {
			return word.split('').reverse().join('')
		} else {
			return word
		}
	})
	return split.join(' ')
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
