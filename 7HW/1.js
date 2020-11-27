console.log("1 задание");

function formatTime(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

setInterval(function time() {
    let time = new Date();
    let hours = formatTime(time.getHours());
    let minutes = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());
    let hours2 = document.getElementById("hours2");
    let minutes2 = document.getElementById("minutes2");
    let seconds2 = document.getElementById("seconds2");
    hours2.style.color = "red";
    minutes2.style.color = "green";
    seconds2.style.color = "blue";
    hours2.innerHTML = hours + ":";
    minutes2.innerHTML = minutes + ":";
    seconds2.innerHTML = seconds;
}, 1000);

console.log("2 задание");
let goods = [{
    title: "Bread",
    price: "3$",
    img: "https://picsum.photos/200/120?image=153"
}, {
    title: "Milk",
    price: "3.5$",
    img: "https://picsum.photos/200/120?image=154"
}, {
    title: "Beer",
    price: "10$",
    img: "https://picsum.photos/200/120?image=155"
}];

let goodss = document.getElementById("goods");
renderGood(goods);

function renderGood(good) {
    good.forEach((good) => {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        title.innerText = good.title;
        let img = document.createElement("img");
        img.src = good.img;
        let info = document.createElement("p");
        info.innerHTML = `Цена: ${good.price};`
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(info);
        goodss.appendChild(div);
    })
}











