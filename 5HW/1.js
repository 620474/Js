console.log("1 задача");

function compareTwoArrays(a, b) {
    return a.length === b.length;
}

let a = [1, 2, 3, 4, 5, 6];
let b = [1, 2, 5];
console.log(compareTwoArrays(a, b));


console.log("2 задача");

function range(start, finish, step = 1) {
    let arrayRange = [];
    for (let i = start; i <= finish; i += step) {
        arrayRange.push(i);
    }
    return arrayRange;
}

console.log(range(1, 10, 2));


console.log("3 задача");

function profile(student) {
    let write = `
    name: ${student.name}
    age: ${student.age}
    hobbies : ${student.hobbies}
    institute: ${student.institute}`;
    document.write(write);
}

let student = {
    name: "Karina",
    age: 18,
    hobbies: ["books", " anime", " Kpop"],
    institute: "ITMO",
}
profile(student);
console.log(profile(student));


console.log("4 задача");

let alphabet1 = "аеёиоуэюя";
let alphabet2 = "бвгджзйклмнпрстфхцчшщ";

function rnd(alphabet) {
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

let text = "";
let t = Math.floor(Math.random() * (3 - 1) + 1);
let random = Math.floor(Math.random() * (6 - 3) + 3);

for (let i = 1; i <= random; i++) {
    if (t === 1) {
        if (i % 2 === 0) {
            text += rnd(alphabet2);
        } else {
            text += rnd(alphabet1);
        }
    } else if (t === 2) {
        if (i % 2 !== 0) {
            text += rnd(alphabet1);
        } else {
            text += rnd(alphabet2);
        }
    }
}
console.log(text);

