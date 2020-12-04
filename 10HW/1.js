/*
1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров».
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
 */
function Goods(name, price) {
    this.name = name;
    this.price = price;
}

function GoodsBasket() {
    let basket = [];
    let quantity = 0;
    let priceSum = 0;
    this.addGood = function (good) {
        basket.push(good);
    }
    this.getPriceSum = function () {
        basket.forEach(a => priceSum += a.price);
        return priceSum;
    }
    this.getBasketQuantity = function () {
        quantity = basket.length;
        return quantity;
    }
}
let beer = new Goods("beer", 15);
let beer2 = new Goods("beer2", 20);
let beerbasket = new GoodsBasket();
beerbasket.addGood(beer);
beerbasket.addGood(beer2);

console.log(`Пива на сумму ${beerbasket.getPriceSum()} в кол-ве ${beerbasket.getBasketQuantity()}. Спасибо.`);

/*2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек:
Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке
вида: «Студент: Иван. Возраст: 25 лет. Пол: м.
Интересы: музыка, программирование.
Обучается в ИТМО.»*/


function Person(name, age, gender, hobbies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
    this.toString = function () {
        return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.hobbies}`;
    }
}

let man = new Person("Вася", 25, "М", "Покер, рулетка");
console.log(man.toString());

function Student(name, age, gender, hobbies, institute) {
    Person.call(this, name, age, gender, hobbies);
    this.institute = institute;
    this.toString = function () {
        return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.hobbies}. Инстетут:${this.institute}`;
    }
}

let graduateStudent = new Student("Олег", 22, "М", "Туризм", "МГУ");
console.log(graduateStudent.toString());

/*3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов
получает объект с именем и возрастом пользователя.*/

function User() {
    this.toString = function () {
        return `Имя пользователя:`;
    }
}

User.anonim = function () {
    let anonimMan = new User();
    anonimMan.toString = function () {
        return 'Аноним';
    }
    return anonimMan;
}

User.noAnonim = function (name, age) {
    let noAnonimMan = new User();
    noAnonimMan.name = name;
    noAnonimMan.age = age;

    noAnonimMan.toString = function () {
        return `Звать ${noAnonimMan.name}, полных лет ${noAnonimMan.age}`;
    }
    return noAnonimMan;
}
let a = new User;
console.log(a.toString());
let b = new User.anonim();
console.log(b.toString());
let c = new User.noAnonim("Noname", 666);
console.log(c.toString());


