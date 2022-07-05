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
	let sumNums = null
	const arr = []
	for (let i = 1; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sumNums += i
		}
	}
	return sumNums
	console.log(sumNums)
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	// answer here
	let numVowel = 0
    arr = str.split('')
    console.log(arr)
	arr.forEach(letter => {
		if (letter == 'e' || letter == 'y' || letter == 'u' || letter == 'i' || letter == 'o' || letter == 'a' ) {
			numVowel++
		}
		
	});
    return numVowel
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	// answer here
	let arrOfWord = str.split(' ')
	let returnArr = []
	arrOfWord.forEach((i) => {
		if (i.length >= 5) {
			i = i.split('').reverse().join('')
			returnArr.push(i)
		} else {
			returnArr.push(i)
		}
	})
	return returnArr.join(' ')
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
