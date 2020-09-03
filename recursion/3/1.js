
// capitalize

const solution = (arr) => {

    let newArr = [];
    const capitalize = (array) => {
        if (array.length === 0) return ;

        let str = array[0][0].toUpperCase() + array[0].slice(1);
        newArr.push(str);

        return capitalize(array.slice(1));
    }

    capitalize(arr);
    return newArr;
}

console.log(solution(['abc', 'def', 'ghi']));