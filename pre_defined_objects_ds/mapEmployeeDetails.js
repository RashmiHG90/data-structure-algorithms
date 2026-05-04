
let mapEmployees = new Map();

mapEmployees.set(101, { name: "Alice", department: "HR" });
mapEmployees.set(102, { name: "Bob", department: "IT" });
mapEmployees.set(103, { name: "Charlie", department: "Finance" });  
mapEmployees.set(104, { name: "David", department: "Marketing" });
mapEmployees.set(105, { name: "Eve", department: "Sales" });

if (mapEmployees.has(102)) {
    console.log("Employee with ID 102 exists.");
}else{
    mapEmployees.set(102, { name: "Bob", department: "IT" });
    console.log("Employee with ID 102 added.");
}


mapEmployees.forEach((value, key) => {
    console.log(key + ': ' + value.name + ', ' + value.department);
});

console.log(mapEmployees.get(101));
console.log(mapEmployees.get(102));
console.log(mapEmployees.get(105));

console.log(mapEmployees.has(103));
console.log(mapEmployees.has(105));
mapEmployees.forEach((value, key) => {
    console.log(key + ': ' + value.name + ', ' + value.department);
});
console.log(mapEmployees.size);

mapEmployees.delete(104);
console.log(mapEmployees.has(104));

mapEmployees.clear();
console.log(mapEmployees.size); 