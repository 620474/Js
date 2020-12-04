/*1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров».
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Goods(name, price) {
    this.name = name;
    this.price = price;
}

function GoodsBasket() {
    this.basket = [];
    this.goodsSum = 0;
    this.priceSum = 0;
}

GoodsBasket.prototype.addGood = function (p) {
    this.basket.push(p);
}

GoodsBasket.prototype.returnPriceSum = function () {
    this.basket.forEach(a => this.priceSum += a.price);
    return this.priceSum;
}

GoodsBasket.prototype.returnGoodsSum = function () {
    this.goodsSum = this.basket.length;
    return this.goodsSum;
}

let beer = new Goods("beer", 15);
let beer2 = new Goods("beer2", 20);
let beerbasket = new GoodsBasket();
beerbasket.addGood(beer);
beerbasket.addGood(beer2);

console.log(`Пива на сумму ${beerbasket.returnPriceSum()} в кол-ве ${beerbasket.returnGoodsSum()}. Спасибо.`);


/*
2. Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек:
Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида:
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование. Обучается в ИТМО.»
 */

class Human {
    constructor(name, age, gender, hobbies) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
    }

    toString() {
     return   `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.gender}. Интересы: ${this.hobbies}`;
    }
}

class Student extends Human {
    constructor(name, age, gender, hobbies, institute) {
        super(name, age, gender, hobbies);
        this.institute = institute;
    }
    toString() {
        return super.toString() + ` Обучается в: ${this.hobbies}`;
    }
}

let hmn = new Human("Владлен", 78, "М", "рыбалка, шахматы");
console.log(hmn.toString());

let stnt = new Student("Костя", 21, "Ж", "дарст, кёрлинг", "ДВФУ");
console.log(stnt.toString());
