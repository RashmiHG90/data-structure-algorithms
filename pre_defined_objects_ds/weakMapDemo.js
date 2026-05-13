let weakMap = new WeakMap();
let obj = {name: 'John'};
weakMap.set(obj, "This is weakmap value");
console.log(weakMap.get(obj)); // Output: This is weakmap value
obj = null; // Remove reference to the object
// After some time, the garbage collector will remove the object and its associated value from the weakMap
setTimeout(() => {
    console.log(weakMap.get(obj)); // Output: undefined (since the object has been garbage collected)
}, 1000);

//however we cannot iterate over weakMap or get its size,
//  as it is designed to allow garbage collection of its keys. 
// however, we cannot directly check if the entry has been removed since weakmap
//do not provide a way to inspect its contents. The only way to check if the entry has been removed is to attempt to access it and see if it returns undefined.

//weakMap.set("key", "value"); // This will throw an error because keys in WeakMap must be objects
weakMap.set({}, "value"); // This is valid because the key is an object
