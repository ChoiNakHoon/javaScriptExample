const addBtn = document.querySelector("#add"),
    itemValue = document.querySelector("#item");

const itemList = [];

function showList() {
    var list = "<ul>";
    for (let i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id="+i+">X</span></li>";
    }

    list += "</ul>";

    document.querySelector("#itemList").innerHTML = list;
    const removeItem = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장. 배열 형태가 됨

    for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click", function(){
            const itemId = this.getAttribute("id");
            itemList.splice(itemId, 1);
            showList();
        });
    }
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