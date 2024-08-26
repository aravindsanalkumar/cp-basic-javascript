let arr = [1,2,3,4,5];


let result = arr.map((number) => number * 2);
console.log(result);

let doubleMap = (numbers) => {
    return numbers.map(number => number * 2);
}
console.log(doubleMap(arr));

const filter = (numbers,greaterThan) => {
    return numbers.filter(num => num > greaterThan);
}

console.log(filter(arr,2));

