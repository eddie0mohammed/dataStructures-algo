
const getDigit = (num, place) => {
    
    let str = num.toString();
    if (place >= str.length) return 0;
    return str[str.length - 1 - place];
}

// console.log(getDigit(123, 2));


const digitCount = (num) => {

    console.log(num.toString());
    return num.toString().length;
}

// console.log(digitCount(1012));

const getMostDigtis = (arr) => {

    let maxDigitLength = 0;
    arr.forEach(elem => {
        let currentLength = elem.toString().length;
        if (currentLength > maxDigitLength){
            maxDigitLength = currentLength;
        }
    });
    return maxDigitLength;
}

// console.log(getMostDigtis([12,123,1234]));


const radixSort = (arr) => {

    let maxDigitLength = getMostDigtis(arr);

    for (let k = 0; k < maxDigitLength; k++){

        let bucketList = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++){

            let digit = getDigit(arr[i], k);
            // console.log(digit);
            // console.log(arr[i]);
            bucketList[digit].push(arr[i]);
        }

        arr = [].concat(...bucketList);
    }
    return arr;
}

console.log(radixSort([9,8,7,6,5,4,3,2,1,0]));
