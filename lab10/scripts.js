/*#################################################################################################################*/
/*#################################################################################################################*/

// initialize mocha
mocha.setup('bdd');
// chai has a lot of stuff, let's make assert global
let assert = chai.assert;


/*#################################################################################################################*/
/*#################################################################################################################*/
// Function definitions:


/**********************  1. Banned words  ****************************/
const myStringObj = {
	stringSentence : "This house is not nice!",
	filterBannedWords : function (stringParam){
		let str = this.stringSentence.split(" ");
		let returnValue = str.filter(element1 => !element1.includes(stringParam)).join(" ");
		return returnValue;
	}
}

/********************** 2. Buble sort ****************************/
const myBubbleObj = {
	myArray : [6,4,0, 3,-2,1],
	bubbleSort : function (){
		let len = this.myArray.length;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (this.myArray[j] > this.myArray[j + 1]) {
					let tmp = this.myArray[j];
					this.myArray[j] = this.myArray[j + 1];
					this.myArray[j + 1] = tmp;
				}
			}
		}
		return this.myArray;
	}
}

/********************** 2. Person Class exercise ****************************/

var Person = function() {};
Person.prototype.initialize = function(name, age) {    
	this.name = name;    
	this.age = age; 
}

Person.prototype.describe = function() {    
	return this.name + ", " + this.age + " years old."; 
}

var Student = function() {}; 
Student.prototype = new Person();
Student.prototype.learn = function(subject) {    
	console.log(this.name + " just learned " + subject); 
}

var me = new Student();
me.initialize("John", 25); 
me.learn("Inheritance");

// Teacher class:

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach  = function (subject){
	return this.name + " is now teaching " + subject;
}


//document.write(teacher.teach("WAP"));
/*#################################################################################################################*/
/*#################################################################################################################*/
//Section for test

describe("Test for Inheritance (W2D5)", function (){
	it ("1. Banned words",
		function (){
			assert.equal ("This house is nice!", myStringObj.filterBannedWords("not"));
		}
	)
	it ("2. Bubble Sort", 
		function (){
			assert.deepEqual ([-2, 0, 1, 3, 4, 6], myBubbleObj.bubbleSort());
		}
	)
	
	it ("3. Teacher class test", 
		function(){
			var teacher = new Teacher();
			teacher.initialize("Bandi");
			let subject = "WAP"; 
			assert.deepEqual ("Bandi is now teaching " + subject, teacher.teach(subject));
		}
	)
});


/*#################################################################################################################*/
/*#################################################################################################################*/