
const getDigit = (num, place) => {

    let str = num.toString();
    if (place >= str.length){
        return 0;
    }
    return parseInt(str[str.length - 1 - place]);
}

// console.log(getDigit(12, 0));


const getDigitLength = (num) => {
    return num.toString().length;
}

const getMaxLength = (arr) => {
    let max = 0;
    arr.forEach(elem => {
        if (getDigitLength(elem) > max){
            max = getDigitLength(elem);
        }
    });
    return max;
}

const radixSort = (arr) => {
    let maxLength = getMaxLength(arr);

    for (let k = 0; k < maxLength; k++){
        let digitBucket = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            // console.log(digit);
            // console.log(arr[i]);
            digitBucket[digit].push(arr[i]);
        }
        // console.log(digitBucket);

        arr = [].concat(...digitBucket);
    }
    return arr;
}

console.log(radixSort([9,8,7,6,5,4,3,2,1,0]));