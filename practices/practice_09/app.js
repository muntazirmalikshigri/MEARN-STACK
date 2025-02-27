
function addTask() {
    let input = document.getElementById("todoInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    document.getElementById("todoList").removeChild(li);
}