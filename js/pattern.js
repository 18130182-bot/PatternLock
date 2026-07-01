// PatternLock Version 1.0

const dots = document.querySelectorAll(".dot");
const message = document.getElementById("message");
const loginButton = document.getElementById("loginButton");
const resetButton = document.getElementById("resetButton");

let pattern = [];
let isDrawing = false;

function addDot(dot){

    const id = dot.dataset.id;

    if(pattern.includes(id)){
        return;
    }

    pattern.push(id);

    dot.classList.add("active");

}

function clearPattern(){

    pattern = [];

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    message.textContent = "";

}

dots.forEach(dot=>{

    dot.addEventListener("mousedown",()=>{

        isDrawing = true;

        addDot(dot);

    });

    dot.addEventListener("mouseenter",()=>{

        if(isDrawing){

            addDot(dot);

        }

    });

});

document.addEventListener("mouseup",()=>{

    isDrawing = false;

});

loginButton.addEventListener("click",()=>{

    if(pattern.length < 4){

        message.textContent = "4点以上選択してください";

        return;

    }

    alert("入力されたパターン\n\n"+pattern.join("-"));

});

resetButton.addEventListener("click",clearPattern);
