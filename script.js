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
    const person = { name : name,shirt : shirt}
    const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}`
    return intro;
}


console.log(introducer("jay",'white'));

