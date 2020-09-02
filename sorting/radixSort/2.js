
const getDigit = (num, place) => {

    let str = num.toString();
    if (place >= str.length) return 0;
    return parseInt(str[str.length - 1 - place]);
}

// console.log(getDigit(1, 0));

const digitCount = (num) => {
    return num.toString().length;
}

// console.log(digitCount(1234));

const mostDigits = (arr) => {
    let maxLen = 0;
    arr.forEach(elem => {
        if (digitCount(elem) > maxLen){
            maxLen = digitCount(elem);
        }
    });
    return maxLen;
}

// console.log(mostDigits([1,31,33,212,3333]));


const radixSort = (arr) => {
    const maxLen = mostDigits(arr);

    for (let k = 0; k < maxLen; k++){
        let bucketList = Array.from({length: 10}, () => []);
        // console.log(bucketList);
        for (let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            // console.log(digit);
            bucketList[digit].push(arr[i]);
        }
        arr = [].concat(...bucketList);
    }

    return arr;
}

console.log(radixSort([9,8,7,6,5,4,3,2,1,0]));