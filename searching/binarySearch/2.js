

// const binarySearch = (arr, target) => {


//     arr.sort((a, b) => a - b);

//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right){
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target){
//             return mid;
//         }else if (arr[mid] > target){
//             right = mid;
//         }else if (arr[mid] < target){
//             left = mid + 1;
//         }
//     }
//     return -1;
// }


const binarySearch = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let temp = arr[left] + arr[right];
        if (temp === target){
            return true;
        }else if (temp < target){
            left++;
        }else if (temp > target){
            right--;
        }
    }
    return false;
}

//1. find if target exist in array
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11));

// 2. find if 2 elements add up to target
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 26));
