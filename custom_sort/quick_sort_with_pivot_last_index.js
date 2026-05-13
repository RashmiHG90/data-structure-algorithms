let num = [5,2,9,1,5,6];

function quickSort(arr) {  
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }
}

console.log("Original array: " + num);
let sortedArray = quickSort(num);
console.log("Sorted array: " + sortedArray);
    