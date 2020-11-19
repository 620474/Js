console.log("Первая задача");
let a = "45545";
let sum = 0;
let array = String(a).split("");
array.forEach(e => sum += parseInt(e));
console.log(sum);
console.log("Вторая задача");
let b = "45545";
let array2 = String(b).split("");
let res = [];
array2.forEach(e => res.push(e + e));
console.log(res.toString().replace(/,/g, ''));


