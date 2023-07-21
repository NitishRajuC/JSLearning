function show(){
    console.log("this is show function with no argument");

}

show();

function display(){
console.log("This is display function with no argument");

}
display();
console.log("===============================================");


function personalDetails(firstName,lastName,collegeName){

    console.log('firstName:',firstName,'lastName:',lastName,'collegeName:',collegeName);



}
personalDetails("Nitish","Chougule","SKN");

console.log("=============================================================================");


function swapValue(n1,n2){
    console.log('Befor swap==>n1',n1,'n2',n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('Aefor swap==>n1',n1,'n2',n2);



    

}
var num1 = 100;
var num2 = 200;


swapValue(100,200);


var name1 = 'Anushka';
var name2 = 'Virat';
swapValue(name1,name2);

console.log("==========================================================================");

function addThreeValue(arg1,arg2,arg3){

    console.log('value are',arg1,arg2,arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
 var result = addThreeValue(10.23,600,40);
console.log('Result is',result);

var result = addThreeValue("Hello","Good","Morning");
console.log('RSesult is',result);
