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
const actors = [
    {name:'johnny',netWorth:200000},
    {name:'amber',netWorth:2000},
    {name:'mattdemon',netWorth:170000},
    {name:'dicaprio',netWorth:500000},
    {name:'brad pitt',netWorth:300000},
];

console.log(actors.filter(actor => actor.netWorth > 200000));

let receivedData = actors.filter(actor => actor.netWorth > 200000)
let objData = JSON.stringify(receivedData);
console.log(objData);

let names = receivedData.map(actor => actor.name).join(', ')

let playground = document.querySelector('.playground');

playground.innerHTML = `<h1>${names}</h1>`;



