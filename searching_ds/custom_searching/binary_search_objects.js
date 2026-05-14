let emp1 = {id: 100, fname: "Ravi", age: 21, isActive: true};
let emp2 = {id: 103, fname: "Anita", age: 26, isActive: true};
let emp3 = {id: 101, fname: "Suresh", age: 28, isActive: false};
let emp4 = {id: 102, fname: "Priya", age: 24, isActive: true};
let emp5 = {id: 104, fname: "Rohit", age: 30, isActive: false};

let employees = [emp1, emp2, emp3, emp4, emp5];

console.log("Original array of employees:");
console.log(employees);

employees.sort((a, b) => a.id - b.id); // Sorting the array of objects based on the 'id' property
console.log("Sorted array of employees by id:");
console.log(employees);

function binarySearch(arr, targetId){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid].id === targetId){
            return mid;
        }
        else if(arr[mid].id < targetId){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

let targetId = 102;
let result = binarySearch(employees, targetId);
if(result !== -1){
    console.log("Employee found at index: " + result);
    console.log("Employee details: ", employees[result]);
}
else{
    console.log("Employee with id " + targetId + " not found in the array.");
}
