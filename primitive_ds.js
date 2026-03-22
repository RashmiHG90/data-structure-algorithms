//create employee using primitive data types

let id= 100;
let fname = "Ravi";
let age1 = 21;
let isActive = true;
let msg;
let s1 = Symbol("empId")

console.log("id is " + id + "type of variable: " + typeof(id))
console.log("first name is: "+ fname + "type of variable: " + typeof(fname))
console.log("Age is: " + age1 + "type of variable: " + typeof(age1))
console.log("Is active :" + isActive + "type of variable: " + typeof(isActive));
console.log(" Message value is: "+ msg + "type of variable: " + typeof(msg))
console.log("symbol example: " )
console.log( s1)    
console.log( "type of variable: " + typeof(s1))


// string
let name = "Alice";

// number
let age = 25;

// boolean
let isLoggedIn = true;

// undefined
let data;
console.log(data); // undefined

// null
let emptyValue = null;

// bigint
let bigNumber = 123456789012345678901234567890n;

// symbol
let uniqueId = Symbol("id");

// printing values
console.log(name);
console.log(age);
console.log(isLoggedIn);
console.log(emptyValue);
console.log(bigNumber);
console.log(uniqueId);