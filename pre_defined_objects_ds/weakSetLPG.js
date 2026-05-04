let lpgRequest = new WeakSet();

function requestLPG(customer){
    if(lpgRequest.has(customer)){
        console.log("Customer has already requested LPG.");
    }else{
        lpgRequest.add(customer);
        console.log("LPG request added for customer - " + customer.name);
    }
}

let customer1 = { name: "Alice", id: 1 };
let customer2 = { name: "Bob" , id: 2 };
requestLPG(customer1); // LPG request added for customer - Alice
requestLPG(customer2);
requestLPG(customer1); // Customer has already requested LPG.
customer1 = null; // Remove reference to customer1
// The object may be garbage collected
console.log(lpgRequest.has(customer1)); // false, customer1 has been garbage collected
console.log(lpgRequest.has(customer2)); // true, customer2 is still referenced