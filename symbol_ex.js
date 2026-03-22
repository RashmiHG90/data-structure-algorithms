let emp1 = {name: "Ravi", age: 21}
let emp2 = {name: "Ravi", age: 21}
let s1 = Symbol("empId")
let s2 = Symbol("empId")
emp1[s1]= 100;
emp2[s2]=101;

console.log(emp1.name + " " + emp1.age)
console.log(emp2.name + " " + emp2.age)
console.log(Object.keys(emp1))
console.log(Object.keys(emp2))