function sum(a,b){
    let total = a + b;
    return total;
}

console.log(sum(5,7));

const sumArrow = (a,b) =>{
    let total =  a + b;
    return total;
}

console.log(sumArrow(4,7));

const introducer = (name , shirt) => {
    const person = { 
        name : name,
        shirt : shirt,
        assets:100000,
        debt:50000,
        netWorth: function(){
            return this.assets - this.debt;
        }
    };
    const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my netWorth is ${person.netWorth()}$`
    return intro;
}


console.log(introducer("jay",'white'));

const groceries = ['🍌', '🍎', '🍊', '🍐','🍪','🫐'];
console.log('loop1')
groceries.forEach(function(item){
    console.log(item);
})
console.log('loop2')
for(fruit of groceries){
    console.log(fruit);
}


const numbers = [1,2,3,4,5,6];

let result = [];
for(number of numbers){
    result.push(number * 2);
}

console.log(result);

let result4Fun = [];
const double = (arr) =>{
    for(number of arr){
        result4Fun.push(number * number);
    }
    return result4Fun;
}

console.log(double(numbers));

const howManyLetters = (phrase) => {
    let result = 0;
    for(index in phrase){
        result = Number(index) + 1;
    }
    return {result};
}

const phrase = 'hey, can you go to grocery store with me?';

console.log(howManyLetters(phrase));
console.log(phrase.length);

let arr = [1,2,3,4];

const sumArray = (numbers) => {
    let result = 0;
    for(const number of numbers){
        result += number;
    }
    return {result}
}

console.log(sumArray(arr));

const max = (numbers) => {
    let result = numbers[0];
    for(const number of numbers){
        if(number > result){
            result = number;
        }
    }
    return {result};
}

console.log(max(arr));


const letterFrequency = (phrase) => {
    let frequency = {}
    for(const letter of phrase){
        if(letter in frequency){
            frequency[letter] = frequency[letter] + 1;
        }
        else{
            frequency[letter] = 1;
        }
    }
    return frequency;
}

console.log(letterFrequency('malayalam'));


const wordFrequency = (phrase) => {
    let wordArray = phrase.split(' ');
    console.log(letterFrequency(wordArray));
}
console.log(wordFrequency('lol what lol yo yo yo'));


