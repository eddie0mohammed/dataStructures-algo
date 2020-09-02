
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// pivot helper

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++){
        if (arr[i] < pivot){
            swapIndex++;
            swap(arr, i, swapIndex);
            // let temp = arr[i];
            // arr[i] = arr[swapIndex];
            // arr[swapIndex] = temp;
        }
    }
    swap(arr, start, swapIndex);
    // console.log(arr);
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length -1 ) => {

    if (left < right){
        let pivotIndex = pivotHelper(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]))


// [4,8,2,1,5,7,6,3]