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
	// answer here
	let sum = 0;
	for (let index = num-1; index > 0; index--) {
		if (index % 3 === 0 || index % 5 === 0 ) {
			num += index}
	}
	return num
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	// answer here
	let vowelCounter = 0
	for (let i = 0; i < str.length; i++) {
		switch (str.charAt(i)) {
			case 'a':
			case 'o':
			case 'u':
			case 'e':
			case 'i':
			// case 'y':
					vowelCounter++
			break;
		}
		return vowelCounter
	}
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	// answer here
	const words = str.split(' ')
	
	for (let i = 1; i < words.length; i++) {
		words[i] = words[i].split('').reverse().join('')
	}
	return words.join(' ') 
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
