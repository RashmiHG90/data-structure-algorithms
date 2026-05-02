const visitor = new Set();

function addVisitor(name) {
    if (visitor.has(name)) {
        console.log(`${name} has already visited.`);
    } else {
        visitor.add(name);
        console.log(`${name} added to the visitor list.`);
    }   
}

addVisitor("Alice@gmail.com");
addVisitor("Bob@gmail.com");
addVisitor("Alice@gmail.com"); // Duplicate entry 

console.log("Current visitors:", [...visitor]);