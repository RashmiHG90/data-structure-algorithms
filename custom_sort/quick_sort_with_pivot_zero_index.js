let num = [5,2,1,9]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivot = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
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

