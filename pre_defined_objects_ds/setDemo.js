
let ss = new Set();
console.log("Initial Set:", ss);

ss.add(1);
ss.add(2);
ss.add(3);
ss.add(2); // duplicate entry, will not be added
console.log(ss);
console.log("After adding 1, 2, 3:", ss);
console.log("size of set:", ss.size);

console.log("Does set contain 2?", ss.has(2));
console.log("Does set contain 4?", ss.has(4));

ss.delete(2);
console.log("After deleting 2:", ss);
console.log("Does set contain 2?", ss.has(2));
console.log("delete 4:" + ss.delete(4)); // trying to delete non-existent element
console.log(ss);

console.log("Iterating over set:");
for (let item of ss) {
    console.log(item);
}