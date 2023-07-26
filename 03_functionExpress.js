/*function display(){
    console.log(`I am UI Developer`);
}
display();
console.log("==========================================")*/



var num = 100;
console.log(num);
var display = function(){
    console.log("I am angular Developer");
}
display();
console.log(typeof display);

var add = function(num1,num2){

    var result = num1 + num2;
    console.log(`Addition is : ${result}`);
}
add(20,25);


var wordCount = function(word){

   var words = word.split(" ");
    var wordCount = words.length;

    console.log(`In Given string ${word}`);
    return wordCount;

}
var result =  wordCount("I am UI Developer");
console.log(`Total word count is: ${result}`);