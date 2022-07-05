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
	sum = 0
	for (let i = num-1; i > 0; i--) {
		if (i % 3 === 0) {
			sum+= i
		} else if (i % 5 === 0) {
			sum+= i
		}
	}
	return sum
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	total = 0
	listOfLetters = str.split('')
	listOfLetters.forEach(letter => {
		if (letter == 'a') {
			total++
		} else if (letter == 'e') {
			total++
		} else if (letter == 'i') {
			total++
		} else if (letter == 'o') {
			total++
		} else if (letter == 'u') {
			total++
		}
	})
	return total
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	newStr = [ ]
	listOfWords = str.split(' ')
	listOfWords.forEach(word => {
		if (word.length >= 5) {
			revWord = word.split('').reverse().join('')
			newStr.push(revWord)
		} else {
			newStr.push(word)
		}
	})
	
	return newStr.join(' ')
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
