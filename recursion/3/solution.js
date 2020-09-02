
// // const solution = (arr) => {

// //     let newArr = [];

// //     const capitalize = (array) => {
// //         if (array.length === 0) return ;

// //         let str = array[0].slice(0,1).toUpperCase() + array[0].slice(1);
// //         newArr.push(str);
// //         return capitalize(array.slice(1));
// //     }

// //     capitalize(arr);
// //     return newArr;
// // }

// // console.log(solution(['hello', 'hi', 'my', 'name', 'is', 'eddie']));


// const solution = (obj) => {

//     let sum = 0;
//     const calculate = (o) => {

//         for (let key in o){
//             if (typeof o[key] === 'object'){
//                 calculate(o[key]);
//             }else{
//                 if (o[key] % 2 === 0){
//                     sum += o[key];
//                 }
//             }
//         }
//     }

//     calculate(obj);
//     return sum;
// }

// // console.log(solution({
// //     outer: 2,
// //     obj: {
// //       inner: 2,
// //       otherObj: {
// //         superInner: 2,
// //         notANumber: true,
// //         alsoNotANumber: "yup"
// //       }
// //     }
// //   }));

// console.log(solution({
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   }));


// const solution = (arr) => {

//     let newArr = [];
//     const capitalize = (array) => {
//         if (array.length === 0) return ;
//         let temp = array[0];
//         // newArr.push(temp[0].toUpperCase() + temp.slice(1).join(''));
//         newArr.push(temp.toUpperCase())
//         return capitalize(array.slice(1)); 
//     }
//     capitalize(arr);
//     return newArr;
// }

// console.log(solution(['i', 'am', 'learning', 'recursion']));


// const solution = (obj) => {

//     let newObj = {};

//         for (let key in obj){
//             if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//                 newObj[key] = solution(obj[key]);
//             }else if (typeof obj[key] === 'number'){
//                 newObj[key] = obj[key].toString();
//             }else {
//                 newObj[key] = obj[key];
//             }
//         }
//     return newObj;
// }

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//       if (typeof obj[key] === 'number') {
//         newObj[key] = obj[key].toString();
//       } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         newObj[key] = stringifyNumbers(obj[key]);
//       } else {
//         newObj[key] = obj[key];
//       }
//     }
//     return newObj;
//   }

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// console.log(solution(obj));
// console.log(stringifyNumbers(obj));



// const solution = (obj) => {

//     let arr = [];
//     const filter = (object) => {

//         for (let key in object){
//             if (typeof object[key] === 'string'){
//                 arr.push(object[key]);
//             }else if (typeof object[key] === 'object' && !Array.isArray(object[key])){
//                 filter(object[key]);
//             }
//         }
//     }

//     filter(obj);
//     return arr;

// } 

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const solution = (obj) => {

    const arr = [];
    const solve = (obj) => {
        for (let key in obj){
            if (typeof obj[key] === 'string'){
                arr.push(obj[key]);
            }
            else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                solve(obj[key]);
            }
        }
    }

    solve(obj);
    return arr;
}


console.log(solution(obj))
