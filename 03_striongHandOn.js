function stringHandsOn(){
    var inputString = "     Hey you are doing good,keep it up     ";
    console.log("=======================step1==========================");
     console.log(inputString);
    console.log("=======================step2==========================");
    console.log("Length of String :",inputString.length);
    console.log("=======================step3==========================");
    var trimmedString = inputString.trim();
    console.log(`TrimmedString: ${trimmedString},Length of trimmerdString: ${trimmedString.length}`);
    console.log("=======================step4==========================");
    extraSpaceCount = inputString.length - trimmedString.length;
    console.log(`Total number of extraSpaceCount: ${extraSpaceCount}`); 
    console.log("=======================step5==========================");
    console.log(`First and Last character after trim: ${trimmedString[0],trimmedString[trimmedString.length-1]}`);
    console.log("=======================step6==========================");
    var wordArray = trimmedString.split;
    var totalWordCount = wordArray.length;
    console.log(`Total word count after trim: ${totalWordCount}`);
    console.log("=======================step7==========================");
    var indexGood = trimmedString.indexOf("good");
    console.log(`indexGood: ${indexGood}`);
    console.log("=======================step8==========================");
    var substringUsingSubstring = trimmedString.substring(22);
    console.log(`substring starting from index 22: ${substringUsingSubstring}`);
    var substringUsingSlice = trimmedString.slice(22);
    console.log(`substringUsingSlice: ${substringUsingSlice}`);
    console.log("=======================step9==========================");
    var endWithUp = trimmedString.endsWith("up");
    console.log(`end with up afte 3 step : ${endWithUp}`);
    console.log("=======================step10==========================");
    var startsWithHey = trimmedString.startsWith("Hey");
    console.log(`starts with hey: ${startsWithHey}`);
    

    






}
stringHandsOn();

    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

