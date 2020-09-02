

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selectionSort = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if (minIndex !== i){
            count++;
            swap(arr, minIndex, i);
        }

    }
    console.log(count);
    return arr;

}

console.log(selectionSort([9,8,7,6,5,4,3,2,1,0]));