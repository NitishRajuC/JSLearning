var greet = "Good Morning  virat Dude";
var lengthGreet = greet.length;
console.log(greet,'length of string is:',lengthGreet);

var charAt0 = greet.charAt(0);
console.log(` ${greet} - Char at 0th index is  ${charAt0}`);
greet.charAt(lengthGreet-1);
//console.log(`Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);


var firstName = "Nitish";
var lastName = "Chougule";
var result = firstName + lastName;
console.log(`concate string is ${result}`);

var result = firstName.concat(lastName);
console.log(`My full name is ${result}`);
console.log("================================================");

var result = greet.indexOf('M');
console.log(`Index of char'm ${result}`);
var result = greet.indexOf('Dude');
console.log(`index of sub string 'dude is: ${result}`);
console.log("================================================");








var result = greet.includes('virat');
console.log(`result is ${result}`);
console.log("================================================");

var  result = greet.split(` `);
var words = result.length;
console.log(`total num of word are ${words}`);
console.log("================================================");

var greet = "      Good Morning     ";
var result = greet.trim();
console.log(`Befor string length : ${greet.length},After string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
 var trimEndLength = resultTrimEnd.length;
var endSpaces = greet.length - trimEndLength;
console.log(`end spaces is: ${endSpaces}`);
console.log("================================================");


var greet = "Good Morning virat dude";
 var result = greet.replace('','-');
 console.log(`After replace  '' with string '-' string is: ${result}`);
 var result = greet.replace('o','O');
 console.log(`result string is: ${result}`);
 console.log("================================================");

var result =  greet.slice(5,15);
console.log(`slice from index 5 till 12 is: ${result}`);





