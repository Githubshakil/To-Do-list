let inputBox = document.querySelector("#inputBox");
let addBtn = document.querySelector("#addBtn");
let upBtn = document.querySelector("#upBtn");
let taskItems = document.querySelector("#taskItems");
let trashItems = document.querySelector(".trash");

let taskList = []
let TrashList = []



addBtn.addEventListener("click", () => {
    if (inputBox.value == "" || inputBox.value == " ") {
        alert("You Have to write Task")
    } else {
        taskList.push(inputBox.value)
        displayFunc()

    }
    
})

function displayFunc() {
    inputBox.value = ""
    taskItems.innerHTML =""
    trashItems.innerHTML = ""

    taskList.map((item, index) => {
        taskItems.innerHTML += `<li>${index + 1}. ${item} <span> <i class="fa-solid fa-pen-to-square"></i> 
        <i class="fa-regular fa-trash-can"></i></span></li>`
    })

    TrashList.map((item, index) => {
        trashItems.innerHTML += `<li>${index + 1}. ${item}<span><i class="fa-regular fa-trash-can"></i></span></li>`
    })
}




