let inputBox = document.querySelector("#inputBox"); // Input box for entering tasks
let addBtn = document.querySelector("#addBtn"); // Button to add tasks
let upBtn = document.querySelector("#upBtn"); // Button to update tasks
let taskItems = document.querySelector("#taskItems"); // Container for task items
let trashItems = document.querySelector(".trash"); // Container for trash items

let taskList = []; // Array to store tasks
let TrashList = []; // Array to store deleted tasks
let upIndexNum; // Variable to store the index of the task to be updated

// Event listener for updating a task
upBtn.addEventListener("click", () => {
    taskList[upIndexNum] = inputBox.value; // Update the task in the list
    displayFunc(); // Display the updated list
    upBtn.style.display = "none"; // Hide the update button
    addBtn.style.display = "inline-block"; // Show the add button
});

// Event listener for adding a task
addBtn.addEventListener("click", () => {
    if (inputBox.value == "" || inputBox.value == " ") { // Check if the input box is empty
        alert("You Have to write Task"); // Alert if input is empty
    } else {
        taskList.push(inputBox.value); // Add the task to the list
        displayFunc(); // Display the updated list
    }
});

// Function to display the task list and trash list
function displayFunc() {
    inputBox.value = ""; // Clear the input box
    taskItems.innerHTML = ""; // Clear the task list container
    trashItems.innerHTML = ""; // Clear the trash list container

    // Display tasks in the task list
    taskList.map((item, index) => {
        taskItems.innerHTML += `<li>${index + 1}. ${item} <span> <i class="fa-solid fa-pen-to-square editBtn"></i> 
        <i class="fa-regular fa-trash-can moveTrashBtn"></i></span></li>`;
    });

    // Display tasks in the trash list
    TrashList.map((item, index) => {
        trashItems.innerHTML += `<li>${index + 1}. ${item} <span><i class="fa-regular fa-window-restore undoBtn"></i>
        <i class="fa-regular fa-trash-can delBtn"></i></span></li>`;
    });

    let editBtn = document.querySelectorAll(".editBtn"); // Select all edit buttons
    let editBtnArr = Array.from(editBtn); // Convert NodeList to Array

    // Add event listeners to edit buttons
    editBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            inputBox.value = taskList[index]; // Set the input box value to the selected task
            upBtn.style.display = "inline-block"; // Show the update button
            addBtn.style.display = "none"; // Hide the add button
            upIndexNum = index; // Set the index of the task to be updated
        });
    });

    let moveTrashBtn = document.querySelectorAll(".moveTrashBtn"); // Select all move-to-trash buttons
    let moveTrashBtnArr = Array.from(moveTrashBtn); // Convert NodeList to Array

    // Add event listeners to move-to-trash buttons
    moveTrashBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            TrashList.push(taskList[index]); // Add the task to the trash list
            taskList.splice(index, 1); // Remove the task from the task list
            displayFunc(); // Display the updated list
        });
    });

    let undoBtn = document.querySelectorAll(".undoBtn"); // Select all undo buttons
    let undoBtnArr = Array.from(undoBtn); // Convert NodeList to Array

    // Add event listeners to undo buttons
    undoBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            taskList.push(TrashList[index]); // Add the task back to the task list
            TrashList.splice(index, 1); // Remove the task from the trash list
            displayFunc(); // Display the updated list
        });
    });

    let delBtn = document.querySelectorAll(".delBtn"); // Select all delete buttons
    let delBtnArr = Array.from(delBtn); // Convert NodeList to Array

    // Add event listeners to delete buttons
    delBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            TrashList.splice(index, 1); // Remove the task from the trash list
            displayFunc(); // Display the updated list
        });
    });
}
