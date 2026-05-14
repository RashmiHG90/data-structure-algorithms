let num = [4, 2, 7, 1, 3,9,5,6,8];

let target = 5;

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1; 
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }   
        else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log("Original array: " + num);
// Note: The array must be sorted for binary search to work correctly
num.sort((a, b) => a - b); // Sorting the array in ascending order
console.log("Sorted array: " + num);

let result = binarySearch(num, target);
if(result !== -1){
    console.log("Element found at index: " + result);
}else{
    console.log("Element not found in the array.");
}
