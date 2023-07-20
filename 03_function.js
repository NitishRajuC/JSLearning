 function swap(n1,n2){                 // n1&n2=parameteror argument   n1=num1 n2=num2
    console.log('Inside swap function');
    console.log('Before swap==>n1',n1,'n2',n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('Aefore swap==>n1',n1,'n2',n2);


}

var num1 = 100;
var num2 = 200;
swap(num1,num2);//function call&invocation 
console.log('End of program');
var sweety = "Sweety";
var cutie = "cutie";
swap(sweety,cutie);
