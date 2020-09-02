
// helper method recursion

// const outer = (input) => {

//     let outerScoperVariable = 0

//     const helper = (helperInput) => {
//         // modify the outerScopeVariable
//         // console.log(helperInput);
//         if (helperInput === 0) return 0;
//         return helperInput + helper(--helperInput);
//     }

//     outerScoperVariable = helper(input);
    
//     return outerScoperVariable;
// }

// console.log(outer(10))


// // iterative
// const solution = (num) => {
//     let arr = [];
//     for (let i = 1; i <= num; i++){
//         if (i % 2 !== 0){
//             arr.push(i)
//         }
//     }
//     return arr;
// }

// console.log(solution(10));


// // recursive
// const solution = (array) => {
//     let arr = [];

//     const recur = (n) => {
//         if (n.length === 0) return ;

//         let temp = n.shift();
//         if(temp % 2 !== 0){
//             arr.push(temp);
//         }
//         recur(n);
//     }
//     recur(array);
//     return arr;
// }

// console.log(solution([1,2,3,4,5,6,7,8,9,10]));



// iterative
// const solution = (num, pow) => {

//     if (pow === 0){
//         return 1;
//     }
//     let prod = 1;
//     while(pow > 0){
//         prod *= num;
//         pow--;
//     }
//     return prod;
// }

// console.log(solution(2, 5));

// // recursive
// const solution = (num, pow) => {


//     const calculatePow = (number, power) => {
//         if (power === 0){
//             return 1;
//         }

//         return number * calculatePow(number, power - 1);
//     }

//     return calculatePow(num, pow);

// }

// console.log(solution(2, 5));


// // recursive
// const solution = (n) => {

//     const factorial = (num) => {
//         if (num === 0 || num === 1){
//             return 1;
//         }
//         return num * factorial(num - 1);
//     }

//     return factorial(n);
// }

// console.log(solution(5));


// //iterative
// const solution = (arr) => {
//     let prod = 1;
//     for (let i = 0; i < arr.length; i++){
//         prod *= arr[i];
//     }
//     return prod;
// }

// console.log(solution([1,2,3,4,5]));


// // recursive
// const solution = (arr) => {

//     let prod = 1;
//     const prodArr = (array) => {
//         if (array.length === 0){
//             return ;
//         }
//         let temp = array.shift();
//         prod = prod * temp;
//         prodArr(array);
//     }

//     prodArr(arr);
//     return prod;

// }

// console.log(solution([1,2,3,4,5]));




// // iterative
// const solution = (num) => {
//     let sum = 0;
//     for (let i = 0; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(solution(10));

// //recursive
// const solution = (num) => {

//     const sumSol = (n) => {
//         if (n === 0) return n;

//         return n + sumSol(--n);
//     }

//     return sumSol(num);
// }

// console.log(solution(10));

// //iterative
// const solution = (n) => {
    
//     let fibb = [0, 1];
//     while (fibb.length !== n + 1){
//         let p1 = fibb[fibb.length - 1];
//         let p2 = fibb[fibb.length - 2];
//         fibb.push(p1 + p2);
//     }
//     return fibb[n];
// }

// console.log(solution(6));



//recursive
// const solution = (n) => {

//     const fibb = (num) => {
//         if (num === 0) return 0;
//         if (num === 1) return 1;

//         return fibb(num - 2) + fibb(num - 1);

//     }
//     return fibb(n);
// }

// console.log(solution(6));


// const solution = (arr) => {

//     let oddsArr = [];
//     const odds = (array) => {
//         if (array.length === 0) return ;
//         if (array[0] % 2 !== 0){
//             oddsArr.push(array[0]);
//         }
//         return odds(array.slice(1));
//     }

//     odds(arr);
//     return oddsArr
// }

// console.log(solution([1,2,3,4,5,6,7,8,9,10]));


// const solution = (int, pow) => {

//     const power = (i, n) => {
//         if (n === 0) return 1;
//         return i * power(i, n - 1);
//     }
//     return power(int, pow);
// }



// console.log(solution(2, 5));


// const solution = (n) => {

//     const factorial = (num) => {
//         if (num === 0) return 1;
//         return num * factorial(num - 1);
//     }
//     return factorial(n);
// }

// console.log(solution(5));


// const solution = (arr) => {

//     let product = 1;
//     const prod = (array) => {
//         if (array.length === 0) return ;
//         product *= array[0];
//         return prod(array.slice(1));
//     }

//     prod(arr);
//     return product;
// }

// console.log(solution([1,2,3,4,5]));


// const solution = (num) => {

//     const sum = (n) => {
//         if (n === 0) return n;

//         return n + sum(n - 1)
//     }
//     return sum(num);
// }

// console.log(solution(5));


const solution = (int) => {

    const fibb = (i) => {

        if (i === 0) return 0;
        if (i === 1) return 1;

        return fibb(i - 2) + fibb(i - 1);
    }
    return fibb(int);
}

console.log(solution(6));

































