
const selectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++){

        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if (minIndex !== i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([9,8,7,6,5,4,3,2,1,0]));