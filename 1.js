
//count the number of times a substring occurs in a string
// 2 pointers (naive)

const solution = (str, sub) => {

    let p0 = 0;
    let p1 = 0;
    let count = 0;

    for (let i = 0; i < str.length; i++){
        if (p1 === sub.length){
            count++;
            p1 = 0;
        }
        if (str[i] === sub[p1]){
            p1++;
        }else{
            p1 = 0;
        }
    }
    return count;
}

console.log(solution('asdomgomgasdasdomgass', 'omg'));