const mm = new Map();

mm.set('name', 'John');
mm.set('age', 30);
mm.set('city', 'New York');
mm.set(1, 'one');

console.log(mm.get('name'));
console.log(mm.get(1));
console.log(mm.has('age'));
console.log(mm.size);

mm.forEach((value, key) => {
    console.log(key + ': ' + value);
});
mm.delete('city');
console.log(mm.has('city'));
mm.clear();
console.log(mm.size);