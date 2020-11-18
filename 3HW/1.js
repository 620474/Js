console.log("1 задача");
let a = [12, 4, 3, 10, 1, 20];
let b = [-3, -7, -100, -33];
console.log(a.concat(b));
console.log(b.concat(a));
console.log("2 задание");
let area = [1, null, 0, null, 1, null, null, null, null];
for (let i = 0; i < area.length; i++) {
    switch (area[i]) {
        case 0:
            document.write("<p>0</p>");
            break;
        case 1:
            document.write("<p>1</p>");
            break;
        case null:
            document.write("<p>...</p>");
            break;
    }
    if ((i + 1) % 3 === 0) {
        document.write("<br>")
    }
}

console.log("3 задача");
let array = [12, 1, 4, 3, 10, 2, 20];
let min = array[0];
let indexMin;
let max = array[0];
let indexMax;
for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i];
        indexMin = i;
    }
}
array.splice(indexMin, 1);
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        indexMax = i;
    }
}
array.splice(indexMax, 1);
console.log(array);


console.log("5 задача");
let weights = [2,7,4,1,8,1];

const start = new Date().getTime();

while (true) {
    if (weights.length === 1) {
        console.log(weights[0]);
        break;
    }
    let a = Math.max.apply(null, weights);
    weights.splice(weights.indexOf(a), 1);
    console.log(a);
    let b = Math.max.apply(null, weights);
    weights.splice(weights.indexOf(b), 1);
    if (a !== b) {
        weights.push(a - b);
    }
}


const end = new Date().getTime();


console.log(`SecondWay: ${end - start}ms`);







