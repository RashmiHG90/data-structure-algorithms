const weakSet = new WeakSet();

weakSet.add({ name: 'John' });
weakSet.add({ name: 'Jane' });
console.log(weakSet);
console.log(weakSet.has({ name: 'John' })); // false, different object reference
console.log(weakSet.has(weakSet)); // false, weakSet is not an object in the set
const obj = { name: 'Doe'};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true, same object reference
//weakSet.add(100); // TypeError: Invalid value used in weak set
//weakSet.add('Hello'); // TypeError: Invalid value used in weak set
//weakSet.add(null); // TypeError: Invalid value used in weak set
//weakSet.add(undefined); // TypeError: Invalid value used in weak set
console.log(weakSet);
obj = null; //remove reference to object
//the object may be garbage collected
console.log(weakSet.has(obj));// false, object has been garbage collected
//cannot use size, iterator or loops,primitive types.. can be used only for objects

