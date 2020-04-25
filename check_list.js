const addBtn = document.querySelector("#add"),
    itemValue = document.querySelector("#item");

const itemList = [];
function showList() {
    var list = "<ul>";
    for (let i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "</li>";
    }

    list += "</ul>";

    document.querySelector("#itemList").innerHTML = list;
}
function addList() {
    var item = itemValue.value;
    if (item != null) {
        itemList.push(item);
        console.log(`결과 : ${itemList}`);
        itemValue.value = "";
        itemValue.focus();
    }
    showList();
}

function init() {
    addBtn.addEventListener("click", addList);
    addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addList();
        }
    });
}

init();