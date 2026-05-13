let num = [4,1,7,3,9,6,8,5,2];
console.log("Before sorting: " + num);
num.sort();
console.log("After sorting: " + num);


console.log("sort with more than one digit");
let num1 = [41,10,5,70,99,33,3,20,60,80,6,50];
console.log("Before sorting: " + num1);
//num1.sort();
//sort it takes callback function to sort the array
//it return +ve, -ve, or 0 based on the comparison of two elements
num1.sort((a,b) => a - b); // for ascending order
console.log("After sorting: " + num1);

let num2 = [11,5,23,16,55,37]

console.log("sort in descending order");
num2.sort((a,b) => { 
    console.log(`Comparing ${a} and ${b}`);
    return b - a; });  
console.log("After sorting: " + num2);