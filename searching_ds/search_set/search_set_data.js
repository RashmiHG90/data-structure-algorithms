let ss = new Set();
ss.add(10);
ss.add(20);
ss.add(30);
ss.add(40);

console.log(ss);
console.log(ss.has(20));
console.log(ss.has(50));
ss.delete(30);
console.log(ss.has(30));
console.log(ss);
ss.clear();
console.log(ss);