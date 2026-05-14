let emp1 = {
    id: 100,
    fname: "Ravi",
    age: 21,
    isActive: true
};
let emp2 = {
    id: 101,
    fname: "Suresh",
    age: 25,
    isActive: false
};
let emp3 = {
    id: 102,
    fname: "Priya",
    age: 30,
    isActive: true
};

let employees = [emp1, emp2, emp3];
let searchId = 101;

let searchEmployee = employees.find(employee => employee.id === searchId);
if(searchEmployee !== undefined){
    console.log("Employee found: " + searchEmployee.fname);
}else{
    console.log("Employee not found");
}