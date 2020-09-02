
const binarySearch = (arr, target) => {

    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    while (left < right){

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target){
            return mid;
        }else if (arr[mid] > target){
            right--;
        }else if (arr[mid] < target){
            left++;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2));