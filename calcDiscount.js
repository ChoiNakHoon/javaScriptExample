const doResult = document.querySelector(".js-calcDisCount"),
    inputCost = doResult.querySelector(".js-nomalCost"),
    inputDisCount = doResult.querySelector(".js-disCount"),
    resultButton = doResult.querySelector(".js-resultCost"),
    resultText = doResult.querySelector(".resultText");

function showDiscount(event) {
    event.preventDefault();
    console.log("여기");
    var normalCost = inputCost.value;
    var setDisCount = inputDisCount.value;
    var doDiscount = "";
    var doCalcResult = "";
    doDiscount = normalCost  * (setDisCount / 100);
    doCalcResult = normalCost - doDiscount;
    console.log(`금액은 ${normalCost}`);
    console.log(`할인율은 ${setDisCount}`); 
    console.log(`절약되는 금액${doDiscount}`);
    console.log(`결과는 ${doCalcResult}`);
    resultText.innerText = `상품의 원래 가격은 ${normalCost}이고, 할인율은 ${setDisCount}입니다. ${doDiscount}원을 절약한 ${doCalcResult}원에 살수 있습니다.`;
}
function init() {
    resultButton.addEventListener("submit", showDiscount)
}

init();