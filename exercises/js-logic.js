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
	const multiples = [];
	for (let n = 1; n < num; n++) {
		if (n % 3 === 0 || n % 5 === 0) { multiples.push(n); };
	}

	return multiples.reduce((acc, n) => { return acc + n; });
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	let vowelCount = 0;
	for (let ch of str) {
		if ("aeiou".includes(ch)) { vowelCount++;}
	}

	return vowelCount;
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	const strArr = str.split(" "); // certainly not the most general solution
	strArr.forEach((word, i) => {
		if (word.length < 5) { return; }
		strArr[i] = word.split("").reverse().join("");
	})

	return strArr.join(" ");
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
