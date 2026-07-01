const dots = document.querySelectorAll(".dot");

let pattern = [];

dots.forEach(dot => {

    dot.addEventListener("click", () => {

        const id = dot.dataset.id;

        if(pattern.includes(id)){
            return;
        }

        pattern.push(id);

        dot.classList.add("active");

        console.log("現在のパターン:", pattern.join("-"));

    });

});

document.getElementById("loginButton").addEventListener("click", () => {

    if(pattern.length < 4){

        alert("4点以上選択してください。");

        return;

    }

    alert("入力パターン: " + pattern.join("-"));

});
