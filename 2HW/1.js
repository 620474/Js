console.log("Первая задача");
let month = parseInt(prompt("Введите месяц").toLowerCase());
switch (month) {
    case 1:
    case 12:
    case 2:
        alert("Зима");
        break;

    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;

    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;

    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;


}
console.log("Вторая задача");

let length = prompt("Введите длину");
let type = Number(prompt("Введите единицу измерения"));
switch (type) {
    case 1:
        alert(`Длина ${length / 10} метров`);
    case 2:
        alert(`Длина ${length * 1000} метров`);
        break;
    case 3:
        alert(`Длина ${length} метров`);
        break;
    case 4:
        alert(`Длина ${length / 1000} метров`);
        break;
    case 5:
        alert(`Длина ${length / 100} метров`);
        break;
}

console.log("Третья задача");

let number = prompt("Введите число");

if (number >= 100 || number <= -100) {
    alert(number < 0 ? "отрицательное трех значное число" : "положительное трехзначное число");
} else if (number >= 10 && number <= 99 || number <= -10 && number <= -99) {
    alert(number < 0 ? "отрицательное двухзначное число" : "положительное двухзначное число");
} else if (number >= 1 && number <= 9 || number <= -1 && number <= -9) {
    alert(number < 0 ? "отрицательное однозначное число" : "положительное однозначное число");
} else {
    alert("нулевое число");
}

console.log("четвертая задача");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("three");
    } else if (i % 3 != 0 && i % 5 == 0) {
        console.log("five");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("threefive");
    }
}

console.log("шестая задача");

let bottle = prompt("Введите кол-во моющего средства");
let numberOf = prompt("Введите кол-во тарелок");


for (; numberOf >= 0 || bottle >= 0; numberOf--) {
    if (numberOf === 0 && bottle === 0) {
        console.log(`Все вымыто, осталось чистящего средства ${bottle}, тарелок ${numberOf}`);
        break;
    }
    console.log(`Осталось моющего средства: ${bottle}`);
    console.log(`Осталось тарелок: ${numberOf}`);
    if (numberOf === 0 || bottle === 0) {
        console.log(numberOf === 0 ? `Все тарелки вымыты, осталось моющего средства ${bottle}` : `Моющее средство закончилось, осталось грязных тарелок ${numberOf}`);
        break;
    }
    bottle -= 0.5;
}




