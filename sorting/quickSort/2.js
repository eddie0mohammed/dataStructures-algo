

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {

    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < arr.length; i++){

        if (arr[i] < pivot){
            pivotIndex++;
            // //swap
            swap(arr, pivotIndex, i);
            // let temp = arr[pivotIndex];
            // arr[pivotIndex] = arr[i];
            // arr[i] = temp;
        }
    }
    //swap pivot with elem at pivotIndex;
    swap(arr, start, pivotIndex);
    // console.log(arr);
    return pivotIndex;
}


const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right){
        let pivot = pivotHelper(arr, left, right);
        //left
        quickSort(arr, left, pivot - 1);
        //right
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

console.log(quickSort([9,8,7,6,5,4,3,2,1, 0]));