
/***************************************************************************************************/
/***************************************************************************************************/

/* runs test for permitive data types whether expected value is equal to the found value */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED. Expected " + expected + " found " + found;
  }
}

/*runs test for only the 2 arrays, not permitive values whether expected value is equal to the found value*/
function myFunctionTestForArray(expected, found) {
    var counter = 0;
	for (i=0; i < expected.length;i++) {
		if (expected[i] !== found [i]) {
			counter ++;
		}
	}
	if (counter === 0) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED. Expected " + expected + " found " + found;
	}
}

/***************************************************************************************************/
/***************************************************************************************************/
/*1. Max of 2 numbers */
function maxOfTwo(one, two){
	if (one > two) {
		return one;
	} else {
		return two
	}
}

/*2. Max of 3 numbers*/
function maxOfThree (one, two, three) {
	if (one > maxOfTwo (two, three)) {
		return one;
	}else {
		return maxOfTwo (two, three);
	}
}

/*3. Takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isVowel(inputChar){
	var vowels = "aeiou";
	if (inputChar.length == 1) {
		if (vowels.indexOf(inputChar) >= 0){
			return true;
		}else {
			return false;
		}
	}else {
		return false;
	}
}

/*4. Define a function sum() and a function multiply() */
// 4.1 Sum
function sum(myArray){
	var sumValue = 0;
	for (i=0; i< myArray.length; i++ ){
		sumValue = sumValue+ myArray[i];
	}
	return sumValue;
}
// 4.2 Multiply 
function multiply(myArray){
	var multValue = 1;
	for (i=0; i<myArray.length; i++){
		multValue = multValue * myArray[i];
	}
	return multValue;
}

/*5. Define a function reverse() that computes the reversal of a string.*/
function reverse(inputString){
	return inputString.split("").reverse().join("");
}

/*6. Function findLongestWord() that takes an array of words and returns the length of the longest one*/
function findLongestWord(myWordsArray){
	var longWord = myWordsArray[0];
	for (i=0; i<myWordsArray.length; i++){
		if (longWord.length < myWordsArray[i].length){
			longWord = myWordsArray[i];
		}
	}
	return longWord;
}

/*7. Function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/

function filterLongWords (myWordsArray, i){
	return myWordsArray.filter (function (element) {
		return element.length > i;
	})
}

/*8.1 multiply each element by 10; */ 
function multiplyBy10 (myArray){
	const returnArray = myArray.map(function(element , i, array){
		return element * 10;
	})
	return returnArray;
}

/*8.1 return array with all elements equal to 3; */ 
function arrayEqual3 (myArray){
	const returnArray = myArray.filter(function (element){
		return element === 3;
	})
	return returnArray;
}

/*8.2 return the product of all elements; */ 
function productOfAllElements (myArray){
	const returnArray = myArray.reduce(function (preValue, element, index, array){
		return preValue * element;
	})
	return returnArray;
}


/***************************************************************************************************/
/***************************************************************************************************/
/***************************************************************************************************/

/*Test section*/

console.log ("******************** 1. Max value of two values ******************** ");
console.log ("Expected output of maxOfTwo (10,20) is 20 " + myFunctionTest (20, maxOfTwo(10,20)));

console.log ("\n\n******************** 2. Max value of three values ******************** ");
console.log ("Expected output of maxOfThree (10,20,30) is 30 " + myFunctionTest (30, maxOfThree(10,20,30)));

console.log ("\n\n******************** 3. Confirm vowel letter ******************** ");
console.log ("Expected output of if input is vowel ( a ) is true " + myFunctionTest (true, isVowel('a') ));
console.log ("Expected output of if input is vowel ( b ) is false " + myFunctionTest (true, isVowel('b') ));

console.log ("\n\n******************** 4.1 Sum value of array ******************** ");
console.log ("Expected output of sum ([10,20,30]) is 60 " + myFunctionTest (60, sum([10,20,30])));
console.log ("******************** 4.2 Multiply value of array ******************** ");
console.log ("Expected output of sum ([1,2,3,4]) is 24 " + myFunctionTest (24, multiply([1,2,3,4])));

console.log ("\n\n******************** 5. Reverse the value of string ******************** ");
console.log ("Expected output of reverse ('jag testar') is 'ratset gaj' " + myFunctionTest ("ratset gaj", reverse("jag testar")));

console.log ("\n\n******************** 6. Longest word of the array of words ******************** ");
console.log ("Expected output of longest word (['this','is','JavaScript','yes']) is 'JavaScript' " + myFunctionTest ("JavaScript", findLongestWord(["this","is","JavaScript","yes"])));

console.log ("\n\n******************** 7. Array of words longer than i ******************** ");
console.log ("Expected output of words (['this','is','JavaScript','yes'], 3) is this,JavaScript " + myFunctionTestForArray (["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)));

console.log ("\n\n******************** 8.1. Multiply each element by 10;  ******************** ");
console.log ("Expected output of array ([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])));
console.log ("******************** 8.2. return array with all elements equal to 3 ******************** ");
console.log ("Expected output of array ([1,3,5,3,3]) is [3,3,3] " + myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])));
console.log ("******************** 8.3. return the product of all elements ******************** ");
console.log ("Expected output of array ([1,3,5,3,3]) is 135 " + myFunctionTest (135, productOfAllElements([1,3,5,3,3])));


/***************************************************************************************************/
/***************************************************************************************************/
/***************************************************************************************************/
