
const naiveStringSearch = (str1, str2) => {

    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length){
        if (i === str1.length){
            return true;
        }
        if (str1[i] === str2[j]){
            i++;
            j++;
        }else{
            i = 0;
            j++;
        }
    }
    if (i === str1.length) return true;
    return false;
}

console.log(naiveStringSearch('abcz', '123abc123'));