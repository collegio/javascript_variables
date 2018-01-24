/*

	Learn to Code JavaScript: Lesson 1
	Values, variables, and operators

	Let's start out by working with some basic variables and values, and how we can
	output code to the screen.

	P.S. This is your first example of a block comment!

*/

// We can print values to the console by using console.log()
console.log("This is my first console log, it won't be the last!");

// Strings are encapsulated by single or double quotes
console.log("This is an example of a string.");
console.log('This is another example.');

// Numbers don't require quotes
console.log(4);			// this is an integer
console.log(3.14);		// this is a floating point number

// You can create variables by using the var keyword...
var myFirstVariable = 9;
var myFirstStringVariable = "My first string";

// and print them using console.log()
console.log(myFirstVariable);
console.log(myFirstStringVariable);

// Let's change our number to 3 and print it!
myFirstVariable = 3;
console.log(myFirstVariable);

// Let's add 5 to our variable
myFirstVariable = myFirstVariable + 5;
console.log(myFirstVariable);

// Now let's subtract 2...
myFirstVariable = myFirstVariable - 2;
console.log(myFirstVariable);

// And multiply by 7...
myFirstVariable = myFirstVariable * 7;
console.log(myFirstVariable);

/*

	NOTE: getting lost with the console logs? Remember, the line number
	that the console log is coming from is shown in the web console.

*/

// Let's append some data to our string
myFirstStringVariable += ", from your favorite coder!";
console.log(myFirstStringVariable);

// What is our string's length?
console.log(myFirstStringVariable.length);

// We can also set variables to be booleans. Let's change our first variable
// to a boolean
myFirstVariable = false;
console.log(myFirstVariable);

// Booleans can also be set to true
myFirstVariable = true;
console.log(myFirstVariable);
