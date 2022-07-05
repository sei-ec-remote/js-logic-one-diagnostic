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
	const arr = [];
	for (let i = 0; i < num; i ++)
		if ((i % 3 === 0) || (i % 5 === 0)) {
			arr.push(i);
		}
	const sumArr = arr.reduce((prev, curr) => prev + curr, 0)
	return sumArr;	
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	// answer here
	let vowels = /[aeiou]/gi;
	let result = str.match(vowels);
	return result.length;
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	// answer here
	// split string by words into array
	let newArr = str.split(" ");
	// check each item in array to see if length exceeds 5
	const mappedArr = newArr.map((item) => {
		if (item.length >= 5) {
			let splitString = item.split("");
			let reverseArr = splitString.reverse();
			let joinArr = reverseArr.join("");
			return joinArr;
		} else {
			return item;
		}
	})
	console.log(mappedArr)
	let result = mappedArr.join(" ");
	return result;  
	// if item length exceeds 5, reverse it
	// join array items into new string
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
