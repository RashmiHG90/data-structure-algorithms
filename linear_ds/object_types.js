//literal style objects
// Object creation using object literal syntax, or with primitive data types, or with arrays
let emp1 = {id: 100, name: "Sunshine" , age:30, role: "Developer", isActive:true,
    address:{street: "MG Road", city: "Bangalore", state: "Karnataka"},
    skills:["JavaScript", "React", "Node.js"]
};

console.log(emp1);
console.log("Emp Id: " + emp1.id);
console.log("Emp Name: " + emp1.name);
console.log("Emp Age: " + emp1.age);
console.log("Emp Role: " + emp1.role);
console.log("Emp is Active: " + emp1.isActive);
console.log("Emp Address: " + JSON.stringify(emp1.address));

console.log("city: " + emp1.address.city);
console.log("state: " + emp1.address.state);
console.log("skills: " + emp1.skills.join(", "));
emp1.skills.forEach(skill => {
    console.log("Skill: " + skill);
});

// array of objects

let employees = [
    { id: 100, 
      name: "Sunshine" , 
      age:30,
      role: "Developer", 
      isActive:true, 
      address:{street: "MG Road", city: "Bangalore", state: "Karnataka"}, 
      skills:["JavaScript", "React", "Node.js"]},
    { id: 101, 
      name: "Rainbow" , 
      age:28, 
      role: "Tester", 
      isActive:false, 
      address:{street: "123 Main St", city: "Chennai", state: "Tamil Nadu"}, 
      skills:["Selenium", "TestNG"]},
    { id: 102, 
      name: "Moonlight" , 
      age:32, 
      role: "Manager", 
      isActive:true, 
      address:{street: "456 Oak Ave", city: "Mumbai", state: "Maharashtra"}, 
      skills:["Leadership", "Communication"]}
];

console.log("Object array functionalities");
console.log("Number of employess:" + employees.length);
employees.forEach(emp => console.log(emp));
employees.forEach(emp => console.log(emp.name + " - " + emp.role));

//search particular employee by id or name
let found = employees.find(emp => emp.id === 100); // for one object
console.log("Employee with id 100: " + JSON.stringify(found));
console.log(found);

if(found == undefined){
    console.log("Employee not found");
}else{
    console.log("Employee found: " + found.name);
}

let employeeIndexPosition = employees.findIndex(emp => emp.name === "Rainbow");
if( employeeIndexPosition<0){
    console.log("Employee not found");
}else{
    console.log("Employee found at index: " + employeeIndexPosition);
}

// return type is new array of objects with condition isActive true
let activeEmployees = employees.filter(emp => emp.isActive); // for multiple objects
console.log("Active Employees: " + JSON.stringify(activeEmployees));