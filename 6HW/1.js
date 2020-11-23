console.log("1 задание");
let a = {
    name: 'static',
    count: 0
}

function foo(a, count, size) {

    let arr = [];
    for (let i = 0; i < size; i++) {
        a[count] = i;
        arr.push(JSON.parse(JSON.stringify(a)));
    }
    return arr;
}

console.log(foo(a, 'count', 10));

console.log("2 задание");
function array() {
    let arr = [];
    return function () {
            while(true) {
                let rand = Math.floor(Math.random() * (101 - 1) + 1);
                if(arr.indexOf(rand)===-1) {
                    arr.push(rand);
                    break;
                }
            }
            console.log(arr);
        }
}
let c = array();
for ( let i = 0; i < 100; i++) {
    c();
}


console.log("3 задание");
let student = {
    name: "Karina",
    age: 18,
    hobbies: ["books", " anime", " Kpop"],
    institute: "ITMO",
    info: function () {
        return console.log(`${this.name}. ${this.age} лет. Хобби: ${this.hobbies}. Место обучения: ${this.institute}.`);
    }
}
student.info();

console.log("4 задание");

function factorial(size) {
    if (size === 1) {
        return 1;
    }
    return size * (factorial(size - 1));
}

console.log(factorial(5));

console.log("5 задание");

let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
    { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
arr.sort((a,b) => a.price - b.price);
console.log(arr);

