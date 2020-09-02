
const swap = (arr, i, j) => {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j + 1]){
                // let temp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = temp;
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1,0]));


