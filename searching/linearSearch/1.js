
const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([9,8,7,6,5], 1));