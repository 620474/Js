let field = document.getElementById("field");
let count2 = 0;
function makeThisField(n) {
    for (let i = 0; i < n; i++) {
        let tr = document.createElement("tr");
        field.appendChild(tr);
        for (let j = 0; j < n; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            let div = document.createElement("div");
            div.innerHTML = "Нажми";
            td.appendChild(div);
        }
    }
}

let div = document.getElementsByTagName("div");
function actionCells(n) {
    makeThisField(n);
    let arr = Array.from(document.querySelectorAll("div"));
    for (let i = 0; i < n / 2; i++) {
        arr[Math.floor(Math.random() * arr.length)].innerText = "1";
    }
    arr.forEach(a => a.innerText === "1" ? a.innerText = "Приз" : a.innerText = "Мимо");
    for (let j = 0; j < arr.length; j++) {
        arr[j].addEventListener('click', hide);
        arr[j].addEventListener('click', count);
        arr[j].addEventListener('click', win);
        console.log(count);
    }
}

function gameStart() {
    let size = prompt(("Введите размеры поля"));
    actionCells(size);
    count();
}

gameStart();

function hide(e) {
    e.currentTarget.style.opacity = "5";
}
function win(e) {
    if (e.currentTarget.innerText === "Приз") {
        e.currentTarget.style.opacity = "5";
        alert("Вы выиграли. Сыграйте еще");
        location.reload();
    }
}

function count() {
    console.log(count2);
    if (count2===4) {
        alert("Вы проиграли попробуйте снова. Попробуйте снова.");
        location.reload();
    }
    count2++;
}







