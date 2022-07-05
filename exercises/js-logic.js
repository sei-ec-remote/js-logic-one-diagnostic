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
	let sum = 0;
	for(let i = 1 ; i <num ; i++){
		if(i % 3 == 0){
			sum = sum + i
		}
		else if(i % 5 == 0){
			sum = sum + i
		}
	}
	return sum
	// answer here
}

/*
Question 2

Finish the function. Using the string that is passed in return the number of how many vowels occur.
*/
const vowelCount = (str) => {
	let count = 0;
	const vowels = ['a','e', 'i', 'o','u']
	for( ch of str){
		if(vowels.includes(ch)){
			count++
		}
	}
	return count
	// answer here
}

/*
Question 3

Finish the function. Using the string that is passed in return the same string but if a word in that string is longer than 5 word reverse it.

Ex: If the string that is passed in is `hey there person` the return value should be `hey ereht nosrep`
*/
const stringReverse = (str) => {
	const words = str.split(' ')
	const new_string = []
	for(word of words){
		if(word.length >=5){
			let divide_word = word.split("")
			let reverse_word = divide_word.reverse()
			let join_word=reverse_word.join("")
			word = join_word
		}
		new_string.push(word)
	}
	return new_string.join(" ")
	// answer here
}

module.exports = {
	sumOfNumbers,
	vowelCount,
    stringReverse
}
