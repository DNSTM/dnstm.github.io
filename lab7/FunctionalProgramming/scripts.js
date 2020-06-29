/*#################################################################################################################*/
/*#################################################################################################################*/

// initialize mocha
mocha.setup('bdd');
// chai has a lot of stuff, let's make assert global
let assert = chai.assert;


/*#################################################################################################################*/
/*#################################################################################################################*/
// Function definitions:


/**********************  1. Summary  ****************************/
function sum (myArray){
	let sumValue = myArray.reduce( ( accumulator, currentValue ) => accumulator + currentValue);
	return sumValue;
}
console.log(sum ([10,20,30,40,50]));
/********************** 2. Multiply ****************************/
function multiply(myArray) {
	let multiplyValue = myArray.reduce (( accumulator, currentValue) => accumulator * currentValue);
	return multiplyValue;
}
console.log(multiply ([10,20,30,40,50]));
/********************** 3. Reverse ****************************/
function reverse(myStringParam){
	let reversedString = myStringParam.split('').reduce((reversed, character) => character + '' + reversed);
	return reversedString;
}
console.log(reverse("bandi"));
/********************** 4. Find longest word than i parameter ****************************/
function findLogestWord(myArray, i){
	let longestWord = myArray.filter((element) => (element.length > i));
	return longestWord;
}
console.log(findLogestWord(["this","is","JavaScript","yes"], 3));


/*#################################################################################################################*/
/*#################################################################################################################*/
//Section for test

describe("Functional programming test using mocha and chai", function (){
	it ("1. Test for SUM function. It returns the summary value of array",
		function (){
			assert.equal (150, sum([10,20,30,40,50]));
		}
	)
	it ("2. Test for Multiply function. It returns the multiplies value of array", 
		function (){
			assert.equal (12000000, multiply([10,20,30,40,50]));
		}
	)
	it ("3. Test for Reverse function. It returns the reversed string of the input string", 
		function(){
			assert.equal("idnab", reverse("bandi"));
		}
	)
	it ("4. Test for Finding longest word of an array than input parameter number typed i ", 
		function (){
			assert.deepEqual(["this", "JavaScript"], findLogestWord(["this","is","JavaScript","yes"], 3));
		}
	)
});


/*#################################################################################################################*/
/*#################################################################################################################*/