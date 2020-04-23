const Day = document.querySelector("#accent")

const CONVERT_DAY = 24 * 60 * 60 * 1000;
const FIRST_DAY = "2019-03-26";

function showDays(days) {
    var now = new Date();
    var firstDay = new Date(FIRST_DAY);
    var toNow = now.getTime();
    var toFirst = firstDay.getTime();
    var passedTime = toNow - toFirst;
    var passedDay = Math.round(passedTime / (CONVERT_DAY));
    Day.innerText = `${passedDay}일`;
    var future = toFirst + days * (CONVERT_DAY);
    var someDay = new Date(future);
    var getYear = someDay.getFullYear();
    var getMonth = someDay.getMonth() + 1;
    var getDay = someDay.getDate();

    document.querySelector("#date" + days).innerText =`${getYear}년 ${getMonth}월 ${getDay}일`;

}
function init() {
    showDays(100);
    showDays(200);
    showDays(365);
    showDays(500);
}

init();