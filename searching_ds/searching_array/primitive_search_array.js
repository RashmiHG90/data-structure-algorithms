let num = [5,2,9,1,5,6,3,4,5,8,7,10];

let search = 5;

let searchElements = num.find(element => element === search);
if(searchElements !== undefined){
    console.log("Element found: " + searchElements);
}else{
    console.log("Element not found");
}


let count = 0;
let searchNumberOfTimesPresent = num.filter(element => element === search).length;
if(searchNumberOfTimesPresent > 0){
    console.log("Element found " + searchNumberOfTimesPresent + " times");
}else{
    console.log("Element not found");
}

let searchElementIndexPosition = num.findIndex(element => element === search);
if(searchElementIndexPosition !== -1){
    console.log("Element found at index: " + searchElementIndexPosition);
}else{
    console.log("Element not found");
}