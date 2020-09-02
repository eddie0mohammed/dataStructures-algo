

const merge2Arrays = (arr1, arr2) => {

    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }else{
            newArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

// console.log(merge2Arrays([1,3, 5], [2,4,6]));

const mergeSort = (arr) => {

    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length) / 2);
    // console.log(mid);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge2Arrays(left, right);
}


console.log(mergeSort([3,1,8,2,1,9,0,2,-1,3,5,10]));