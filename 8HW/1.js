console.log("1 задание");
let box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
    box[i].onclick = function () {
        if (this.style.backgroundColor === "") this.style.backgroundColor = "green";
        else this.style.backgroundColor = "";
    }
}

console.log("2 задание");
let i = 0;

function countClick() {
    let count = document.getElementById("counter");
    i++;
    count.innerHTML = `${i}`;
    console.log("click");
}

console.log("3 задание");
let comments = document.getElementById("comments");
let subDiv = document.getElementById("submitdiv");
let tblComment = document.createElement("table");

function submit() {
    let divSubmit = document.createElement("div");
    let trSubmit = document.createElement("tr");
    let authorNameImgDate = document.createElement("td");
    let tdComment = document.createElement("td");
    tdComment.innerHTML = comments.value;
    let fullDate =Date();
    let Nickname = "Vasya";
    authorNameImgDate.innerHTML = `${Nickname}  ${fullDate} <img src="https://picsum.photos/200/120?image=153">`;

    authorNameImgDate.style.border = "1px solid black";
    tdComment.style.border = "1px solid black";
    authorNameImgDate.style.width = "50px";
    tdComment.style.width = "200px";
    divSubmit.appendChild(trSubmit);
    trSubmit.appendChild(authorNameImgDate);
    trSubmit.appendChild(tdComment);
    subDiv.appendChild(divSubmit);
}

console.log("4 задание");
let catalog = [{
    vendor: "1",
    author: "Vasya",
    name: "T-34",
    description: "The T-34 is a Soviet medium tank introduced in 1940, famously deployed during World War II against Operation Barbarossa.",
},
    {
        vendor: "2",
        author: "Vasya2",
        name: "T-35",
        description: "The T-35 is a Soviet medium tank introduced in 1940, famously deployed during World War II against Operation Barbarossa.",
    },
    {
        vendor: "3",
        author: "Vasya3",
        name: "T-36",
        description: "The T-36 is a Soviet medium tank introduced in 1940, famously deployed during World War II against Operation Barbarossa.",
    },
]

let firstdiv = document.getElementById("information");
info(catalog);
let tbl = document.createElement("table");

function info(elem) {
    elem.forEach((el) => {
        let div = document.createElement("div");
        let tr1 = document.createElement("tr");
        let tdNameAuthorVendor = document.createElement("td");
        let tdInfo = document.createElement("td");
        tdNameAuthorVendor.innerText = "Автор: " + el.author + " Название: " + el.name + " Артикул:  " + el.vendor;
        tdInfo.innerHTML = el.description;
        tdNameAuthorVendor.style.border = "2px solid black";
        tdInfo.style.border = "1px solid black";
        tdNameAuthorVendor.style.backgroundColor = "Cyan";
        tdInfo.style.backgroundColor = "Cyan";
        tdNameAuthorVendor.style.width = "50px";
        tdInfo.style.width = "200px";
        console.log(el);
        div.appendChild(tr1);
        tr1.appendChild(tdNameAuthorVendor);
        tr1.appendChild(tdInfo);
        firstdiv.appendChild(div);
    })
}






