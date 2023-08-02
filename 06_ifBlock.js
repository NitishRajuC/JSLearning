var num = 23;
if (num>10) {

    console.log(num);
    
}
console.log(`After if block`);


num = 23;

if (num%2==0) {
    console.log(`${num} is even`);
    
} else {
    console.log(`${num} is odd`);
    
}



function voteEligibility(age,name){

    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>120) {console.log(`${name} your age ${age} is invalid`);
    return;
        
    }

if (age>=18) {
    console.log(` ${name} Eligible for vote`);
    
} else {
    console.log(` ${name} not Eligible for vote`);
    
}


}
voteEligibility(23,"jenny")
voteEligibility(-20,"jenny")
voteEligibility(123,"jenny")
voteEligibility(120,"jenny")
