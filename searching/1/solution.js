
// // 1. linear search

// // // search(arr, x)
// // const solution = (arr, x) => {
// //     for (let i = 0; i < arr.length; i++){
// //         if (arr[i] === x){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }

// let arr = [1,3,1,2,56,1,2, 3, 0];

// // 2. Binary Search

// const solution = (arr, target) => {

//     let p0 = 0; 
//     let p1 = arr.length - 1;

//     arr.sort((a, b) => a - b);
//     console.log(arr);

//     // let left = arr[p0];
//     // let right = arr[p1];
//     while (p0 <= p1){
//         let mid = Math.floor((p0 + p1) / 2);
//         // console.log(mid);
//         if (arr[mid] === target){
//             return true;
//         }else if (arr[mid] < target){
//             p0 = mid + 1;
//         }else if (arr[mid] > target){
//             p1 = mid;
//         }
//     }
//     return false;
// }

// console.log(solution(arr, 56));


const stringSearch = (str1, str2) => {

    let p0 = 0;
    let p1 = 0;

    for (let i = 0; i < str1.length; i++){
        if (p0 === str2.length){
            return true;
        }
        if (str1[i] === str2[p0]){
            p0++;
        }else{
            p0 = 0;
        }
    }
    return false;

}

console.log(stringSearch('abracadabra', 'acza'));



























