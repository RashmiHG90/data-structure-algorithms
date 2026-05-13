let names = ["John", "Alice", "Bob", "Charlie", "David"];
console.log("Before sorting: " + names);
names.sort();
console.log("After sorting: " + names);

names.sort((a, b) => b.localeCompare(a)); // compares 2 names asci code, 
// Sort in reverse alphabetical order
console.log("After sorting in reverse order: " + names);

let names2 = ["Ravi", "anita", "Suresh", "priya", "Vijay"];
console.log("Before sorting: " + names2);
names2.sort((a, b) => {
    console.log(`Comparing ${a} and ${b}`);
    return a.toLowerCase().localeCompare(b.toLowerCase())}); // case-insensitive sorting
console.log("After case-insensitive sorting: " + names2);

let name3 = "Steve";
let name4 = "Steve";
let name7 = "steve";
console.log(name3.localeCompare(name7)); // Output: -1 (since "S" has a lower ASCII value than "s")
console.log(name3.localeCompare(name4)); // Output: 0 (since both strings are identical)

let name5 = "apple";
let name6 = "banana";
console.log(name5.localeCompare(name6)); // Output: -1 (since "a" has a lower ASCII value than "b")