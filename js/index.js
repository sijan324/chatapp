document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("todoInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        listItem.addEventListener("click", function () {
            taskSpan.classList.toggle("completed");
        });

        document.getElementById("todoList").appendChild(listItem);
        input.value = "";  // Clear input field
    }
}

document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
