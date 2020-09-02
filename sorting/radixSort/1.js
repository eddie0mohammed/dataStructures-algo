
// const getDigit = (num, place) => {

//     let str = num.toString();
//     if (place >= str.length) return 0;
//     return parseInt(str[str.length - 1 - place]);
// }

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(12345, 4));

// const digitCount = (num) => {
//     return Math.abs(num).toString().length;
// }

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(-123)); 

const mostDigits = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if (digitCount(arr[i]) > max){
            max = digitCount(arr[i]);
        }
    }

    return max;
}

// console.log(mostDigits([12,344,12,1,9999]));


const radixSort = (arr) => {

    let maxDigitCount = mostDigits(arr);
    
    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);

        for (let i = 0; i < arr.length; i++){
            let currentDigit = getDigit(arr[i], k);
            digitBuckets[currentDigit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
        // console.log(arr);
    }
    return arr;

}

console.log(radixSort([12,344,12,1,9999, 10, 54]));