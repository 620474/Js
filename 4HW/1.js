console.log("Первая задача");
let a = "45545";
let sum = 0;
let array = String(a).split("");
array.forEach(e => sum += parseInt(e));
console.log(sum);
console.log("Вторая задача");
let b = "4545";
let c = "4";
let array2 = String(b).split("");
let res = [];
array2.forEach(e => e === c ? res.push(e + e) : res.push(e));
console.log(res.toString().replace(/,/g, ''));


