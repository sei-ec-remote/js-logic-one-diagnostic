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
	let sum = 0
	for(let i = 0; i<num; i++){
		if(i%3===0 || i%5===0){
			sum+=i
		}
	}
	return sum
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	// answer here
	let sum = 0
	const vowels = ["a","e","i","o","u"]
	for(let i=0; i<str.length; i++ ){
		if(vowels.includes(str[i])){
			sum+=1
		}
	}
	return sum
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	// answer here
	let newStr = str.split(" ")
	let result
	for(let i=0;i<newStr.length;i++){
		result = ""
		if(newStr[i].length>=5){
			for(let j =newStr[i].length-1; j>=0; j--){
				result+=newStr[i][j]
			}
			newStr[i] = result
		}
	}
	return newStr.join(" ")
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
