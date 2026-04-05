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
      skills:["Leadership", "Communication"]},

    { id: 103, 
      name: "Saturn" , 
      age:92, 
      role: "CEO", 
      isActive:true, 
      address:{street: "007 Avenue road", city: "Mumbai", state: "Maharashtra"}, 
      skills:["Leadership", "Communication"]},

    { id: 104, 
      name: "Jupiter" , 
      age:102, 
      role: "Executive", 
      isActive:true, 
      address:{street: "456 Oak tree", city: "Mumbai", state: "Maharashtra"}, 
      skills:["Leadership", "Communication"]},

    // ✅ Added new employees
    { id: 105, 
      name: "Neptune", 
      age:27, 
      role: "UI Designer", 
      isActive:true, 
      address:{street: "Lake View", city: "Hyderabad", state: "Telangana"}, 
      skills:["Figma", "CSS", "UX"]},

    { id: 106, 
      name: "Venus", 
      age:29, 
      role: "Backend Developer", 
      isActive:true, 
      address:{street: "Tech Park", city: "Pune", state: "Maharashtra"}, 
      skills:["Java", "Spring Boot", "SQL"]},

    { id: 107, 
      name: "Mars", 
      age:31, 
      role: "DevOps Engineer", 
      isActive:false, 
      address:{street: "Cyber Hub", city: "Gurgaon", state: "Haryana"}, 
      skills:["Docker", "Kubernetes", "AWS"]},

    { id: 108, 
      name: "Mercury", 
      age:26, 
      role: "Frontend Developer", 
      isActive:true, 
      address:{street: "Brigade Road", city: "Bangalore", state: "Karnataka"}, 
      skills:["HTML", "CSS", "JavaScript"]},

    { id: 109, 
      name: "Pluto", 
      age:35, 
      role: "Data Analyst", 
      isActive:true, 
      address:{street: "Sector 18", city: "Noida", state: "Uttar Pradesh"}, 
      skills:["Python", "SQL", "Power BI"]}
];

console.log("Object array functionalities");
console.log("Number of employess:" + employees.length);
employees.forEach(emp => console.log(emp));
employees.forEach(emp => console.log(emp.name + " - " + emp.role));

//1. search particular employee by id or name
let found = employees.find(emp => emp.id === 100); // for one object
console.log("Employee with id 100: " + JSON.stringify(found));
console.log(found);

if(found == undefined){
    console.log("Employee not found");
}else{
    console.log("Employee found: " + found.name);
}

//2. find index of employee by name
let employeeIndexPosition = employees.findIndex(emp => emp.name === "Rainbow");
if( employeeIndexPosition<0){
    console.log("Employee not found");
}else{
    console.log("Employee found at index: " + employeeIndexPosition);
}

// 3. return type is new array of objects with condition isActive true
let activeEmployees = employees.filter(emp => emp.isActive); // for multiple objects
console.log("Active Employees: " + JSON.stringify(activeEmployees));

//4. get all employee names
let employeeNames = employees.map(emp => emp.name);
console.log("Employee Names: " + employeeNames.join(", "));

//5. flatten all skills of employees into one array
let allSkills = employees.reduce((skills, emp) => skills.concat(emp.skills), []);
console.log("All Skills: " + allSkills.join(", "));
//or
//difference between map and flatMap is that flatMap flattens the result into a single array, 
// while map returns an array of arrays
//where as reduce can be used to achieve the same result but it is more verbose and less 
// efficient than flatMap
let allSkills2 = employees.flatMap(emp => emp.skills);
console.log("All Skills using flatMap: " + allSkills2.join(", "));

//6. get all skills using only map
let allSkills1 = employees.map(emp => emp.skills);  
console.log(allSkills1)
console.log("All Skills using map: " + allSkills1.join(", ")); // this will print skills as string separated by comma
//  but it will not flatten the array of arrays into a single array,
//  it will print the array of arrays as string separated by comma 

//can we use map for skills and then flatten the result using reduce
let allSkills3 = employees.map(emp => emp.skills).reduce((skills, empSkills) => skills.concat(empSkills), []);
console.log("All Skills using map and reduce: " + allSkills3.join(", "));

//7. group employees by city
let groupByCity = employees.reduce((group, emp) => {
    let city = emp.address.city;
    if(!group[city]){
        group[city] = [];
    }
    group[city].push(emp);
     return group;
    }, {});
// console.log("Employees grouped by city: " + JSON.stringify(groupByCity));
console.log(groupByCity);

//8. get total age of all employees
let totalAge = employees.reduce((total, emp) => total + emp.age, 0);
console.log("Total age of all employees: " + totalAge);

//9. sort employees by age
let sortedByAge = employees.slice().sort((a, b) => a.age - b.age);
console.log("Employees sorted by age: " + JSON.stringify(sortedByAge));
//or
// let sortedByAge1 = [...employees].sort((a, b) => a.age - b.age);
// console.log("Employees sorted by age using spread operator: " + JSON.stringify(sortedByAge1));

// 10. delete employee by Id(filter method returns new array without the deleted employee)
let deletedEmployee = employees.filter(emp => emp.id !== 102);
//console.log("Employees after deleting employee with id 102: " + JSON.stringify(deletedEmployee));
console.log(deletedEmployee);