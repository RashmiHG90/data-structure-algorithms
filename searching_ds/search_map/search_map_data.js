let mm = new Map();
mm.set("raj@gmail.com",{fname: "Raj", age: 25, isActive: true});
mm.set("rai@gmail.com",{fname: "Rai", age: 30, isActive: false});
mm.set("suresh@gmail.com",{fname: "Suresh", age: 28, isActive: true});
mm.set("anita@gmail.com",{fname: "Anita", age: 26, isActive: true});
mm.set("priya@gmail.com",{fname: "Priya", age: 24, isActive: false});

console.log(mm);

// to get the value of a key
console.log(mm.get("raj@gmail.com"));
console.log(mm.get("unknown@gmail.com"));

// to check if a key exists
console.log(mm.has("anita@gmail.com"));

// to delete a key-value pair
mm.delete("raj@gmail.com");
console.log(mm);
