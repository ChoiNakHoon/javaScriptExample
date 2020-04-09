const doGugudan = document.querySelector(".js-gugudan"),
    showing = doGugudan.querySelector("div");

const GUGUDAN_CN = "gugudan";

function showGugudan() {

    for (var i = 2; i <= 9; i++) {
        showing.classList.add(GUGUDAN_CN);
        console.log(`여기는 아이 = ${i}`);
        showing.innerText += `${i} 단`;
        showing.innerHTML += `<br>`;
        for (var j = 1; j <= 9; j++) {
            console.log(`여기는 제이 = ${j}`);
            showing.innerText += `${i} X ${j} = ${i * j}`;
            showing.innerHTML += `</br>`;
        }
        showing.innerHTML += `<br><br><br><br><br><br>`;
    }
}
function init() {
    showGugudan();
}
init();