
// const solution = (arr) => {

//     let check = true;
//     let i = 0;
//     while (check) {
//         // console.log(i)

//         if (arr[i] > arr[i + 1]){
//             check = true;
//             let temp = arr[i + 1];
//             arr[i + 1] = arr[i];
//             arr[i] = temp;
//         }
//         i++;

//         if (i === arr.length - 1 && check){
//             i = 0;
//         }else{
//             check = false;
//         }

//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] > arr[j + 1]){
//                 check = true;
//             }
//         }
//     }
//     return arr;

// }

// console.log(solution([1,3,9,0,1,2,5,8,1]))


// //BUBBLE SORT
// //NAIVE
// const solution = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] > arr[j + 1]){
//                 //swap
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(solution([1,3,9,0,1,2,5,8,1]))


// //SELECTION SORT
// const solution = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i){
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// } 
// console.log(solution([1,3,9,0,1,2,5,8,1]))


// ==================================================================

// // 1. bubble sort

// const bubbleSort = (arr) => {

//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([1,3,9,0,1,2,5,8,1]));


// // 2. selection sort

// const selectionSort = (arr) => {

//     for (let i = 0; i < arr.length; i++){
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i){
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([1,3,9,0,1,2,5,8,1]));


// 3. insertionSort
// const solution = (arr) => {

//     for (let i = 1; i < arr.length; i++){
//         let currentVal = arr[i];
//         let j;
//         for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
//             arr[j + 1] = arr[j];            
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }

// console.log(solution([1,3,9,0,1,2,5,8,1]));



const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([1,3,9,0,1,2,5,8,1]));






























