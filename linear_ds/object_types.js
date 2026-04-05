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