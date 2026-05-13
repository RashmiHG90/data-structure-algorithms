let num = [5,2,9,1,5,6];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivotIndex = Math.floor(arr.length / 2);
        let pivot = arr[pivotIndex];
        let left = [];
        let right = [];
        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) continue;
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