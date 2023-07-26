var square = function(num){
    var result = num * num;
    console.log(`square of number is: ${result}`);
 
}
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);
console.log("===================step2======================");

console.log(typeof square);
console.log("===================step3======================");
 var area = function(length,width){

    var result = length * width;
    console.log(`area of rectangle plot is: ${result}`);

 }
 area(499,917);
 console.log("===================step4======================");


 var swapValue = function(num1,num2){
    console.log(`befor swap value is ${num1},${num2}`);

    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After swap value is ${num1},${num2}`);






 }
 swapValue('Mahi','Raina');
 swapValue(55,77);


 console.log("===================step4======================");


 var strOpration = function(str){

    var len = str.length;
    console.log(`Total charactor in given string: ${len}`);
    var ind = str.charAt(6);
    console.log(`Charactor At index 6: ${ind}`);
    var ind2 = str.charAt(11);
    console.log(`Charactor At index 11: ${ind2}`);
    var last = str.charAt(str.length-1);
    var first = str.charAt(0);
    console.log(`Charactor at  very first is: ${first}`);
    var thirdLast = str.charAt(str.length-3);
    console.log(`Charactor at third last ${thirdLast}`);
    var word = str.split(" ");
    var wordCount = word.length;
    console.log(`total number of word:${word}`);
    var square = wordCount * wordCount;
    console.log(`squarr of wordCount is: ${square}`);



    

 }
 var result = strOpration("JS the most popular langguahe of internet");