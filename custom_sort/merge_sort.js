let num = [8,3,5,2];

console.log("Original array: " + num);

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        console.log("Mid" + mid);
        let left = mergeSort(arr.slice(0, mid));
        console.log("Left: " + left);
        let right = mergeSort(arr.slice(mid));
        console.log("Right: " + right); 
        return merge(left, right);
    }   
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    console.log("Merging: " + left + " and " + right);
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            console.log("Comparing " + left[i] + " and " + right[j] + ": " + left[i] + " is smaller, hence pushing it");
            result.push(left[i]);
            i++;
        } else {
            console.log("Comparing " + left[i] + " and " + right[j] + ": " + right[j] + " is smaller, hence pushing it");
            result.push(right[j]);
            j++;
        }
    }
    console.log("Merged result: " + result);
    // Push any remaining elements from either left or right
    return result.concat(left.slice(i)).concat(right.slice(j));
}

let sortedArray = mergeSort(num);
console.log("Sorted array: " + sortedArray);    