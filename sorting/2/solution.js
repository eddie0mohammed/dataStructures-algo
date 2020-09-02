
// 1. bubble sort
// const solution = (arr) => {

//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr;
// }


// // 2. selection sort
// const solution = (arr) => {

//     for (let i = 0; i < arr.length; i++){

//         let min = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[min]){
//                 min = j;
//             }
//         }

//         if (min !== i){
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }


// 3. insertion sort

const solution = (arr) => {

    for (let i = 1; i < arr.length; i++){

        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            
            arr[j + 1] = arr[j];
        }
        arr[j + 1 ] = currentVal;
        
    }
    return arr;
}

// const insertionSort = (arr) => {

//     for (let i = 1; i < arr.length; i++){
//         let currentVal = arr[i];
//         let j;
//         for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }

console.log(solution([1,3,9,0,1,2,5,8,1]))