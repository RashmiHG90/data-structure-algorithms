let num = [5,2,9,1,5,6];

function insertionSort(arr) {
    let n = arr.length; 
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        console.log("key :" + key + ", j:" + j );
        arr[j + 1] = key;
        console.log("step " + i + ": " + arr);
    }   
    return arr;
}

console.log("Original array: " + num);
let sortedArray = insertionSort(num);
console.log("Sorted array: " + sortedArray);    

