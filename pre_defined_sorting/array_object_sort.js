let products = [
    {id: 101, name: "Laptop", price: 1000},
    {id: 102, name: "Smartphone", price: 500},
    {id: 103, name: "Tablet", price: 300},
    {id: 104, name: "Monitor", price: 200},
    {id: 105, name: "Camera", price: 700}
];

console.log("Before sorting: ");
products.forEach(product => console.log(product));
// Sort products by price in ascending order
products.sort((a, b) => a.price - b.price);
console.log("After sorting by price (ascending): ");
products.forEach(product => console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`));
//sort products by price in descending order
products.sort((a, b) => b.price - a.price);
console.log("After sorting by price (descending): ");
products.forEach(product => console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`));

// Sort products by name in alphabetical order
products.sort((a, b) => a.name.localeCompare(b.name));
console.log("After sorting by name (alphabetical): ");
products.forEach(product => console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`));
// Sort products by name in reverse alphabetical order
products.sort((a, b) => b.name.localeCompare(a.name));
console.log("After sorting by name (reverse alphabetical): ");
products.forEach(product => console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`));
