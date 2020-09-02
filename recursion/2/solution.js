
// const solution = (str) => {

//     let reversedStr = '';
//     const reverse = (arr) => {
//         if (arr.length === 0) return '';
//         reversedStr += arr[arr.length - 1];
//         return reverse(arr.slice(0, arr.length - 1));
//     }

//     reverse(str);
//     return reversedStr;
// }

// console.log(solution('hello'));

// const solution = (str) => {
//     let arr = str.split('');
//     let p0 = 0;
//     let p1 = arr.length - 1;

//     while (p0 < p1) {
//         if (arr[p0] !== arr[p1]){
//             return false;
//         }
//         p0++;
//         p1--;
//     }
//     return true;
// }

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

// const solution = (str) => {

//     let arr = str.split('');
//     const isPalindrome = (arr) => {
//         if (arr.length === 0 || arr.length === 1) return true;
        
//         if (arr.length > 1 && arr[0] !== arr[arr.length - 1]) return false;

//         return isPalindrome(arr.slice(1, arr.length - 1));

//     }

//     return isPalindrome(arr);
// }

// console.log(solution('racecar'));

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }


// const solution = (arr, callback) => {

//     let newArr = [];
//     const called = (arr, callback) => {
//         if (arr.length === 0) return ;
//         newArr.push(callback(arr[0]));
//         arr = arr.slice(1);
//         return called(arr, callback);
//     }
//     called(arr, callback);
    

//     let count = 0;
//     newArr.forEach(elem => {
//         if (elem) count++;
//     });

//     return count === 1 ? true : false; 
// }


// const isEven = (num) => {
//     if (num % 2 === 0) return true;
//     return false;
// }

// console.log(solution([1,2,3,5,6,9], isEven));

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

// const solution = (arr) => {

//     const newArr = [];
//     const flatten = (array) => {
//         if (array.length === 0) return ;
//         if (Array.isArray(array[0])){
//             flatten(array[0]);
//         }else{

//             newArr.push(array[0]);
//         }
//         return flatten(array.slice(1));
//     }

//     flatten(arr);
//     return newArr;
// }

// console.log(solution([1,[2], [[3]], 4]));


// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }
  

//   ======================================================



// const solution = (str) => {

//     let reverseStr = '';
//     const reverse = (arr) => {
        
//         if (arr.length === 0) return ;
//         reverseStr = reverseStr + arr[arr.length - 1];
//         return reverse(arr.slice(0, arr.length -1));

//     }

//     reverse(str.split(''));
//     return reverseStr;
// }

// console.log(solution('hello'));


// const solution = (str) => {


//     const isPalindrome = (s) => {
//         if (s.length === 0 || s.length === 1) return true;
//         if (s.length > 1 && s[0] !== s[s.length - 1]){
//             return false;
//         }
//         return isPalindrome(s.slice(1, s.length - 1));
//     }

//     return isPalindrome(str);


// }

// console.log(solution('racecar'));


// const solution = (arr, callback) => {

//     const newArr = [];
//     const test = (array, callback) => {

//         // console.log(callback(array[array.length - 1]));
//         // console.log(array);
//         if (array.length === 0) return ;
//         newArr.push(callback(array[0]));
//         return test(array.slice(1), callback);
//     }

//     test(arr, callback);
    
//     let count = 0;
//     newArr.forEach(elem => {
//         if (elem){
//             count++;
//         }
//     })
//     console.log(count);
//     return  count === 1 ? true : false;

// }

// const isEven = (num) => {
//     if (num % 2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(solution([1,2,3,5,5], isEven));


const solution = (arr) => {

    let newArr = [];
    const flatten = (array) => {

        if (array.length === 0) return ;
        if (Array.isArray(array[0])){
            flatten(array[0]);
        }else{
            newArr.push(array[0]);
        }
        
        return flatten(array.slice(1));
    }
    flatten(arr);
    return newArr; 
}

console.log(solution([1,2,[3], [6, 6], [[4], [4]], [[[5]]]]));