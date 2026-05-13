let num = [5,4,2,9,1,5,3,6];

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log("Pass " + (i + 1) + ": " + arr);
    }
    return arr;
}

console.log("Original array: " + num);
let sortedArray = selectionSort(num);
console.log("Sorted array: " + sortedArray);
