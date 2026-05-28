const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");

button.addEventListener("click", ()=>{
    if(input.value === ""){
        return;
    }

    const task = document.createElement("div");
    const text = document.createElement("p");
    const deleteBtn = document.createElement("button");

    text.textContent = input.value;
    deleteBtn.textContent = "Delete";

//CSS class
task.classList.add("task");

// append text and button INSIDE task
    task.appendChild(text);
    task.appendChild(deleteBtn);

    // append task INSIDE container
    container.appendChild(task);

    /* //delete functionality */
    deleteBtn.addEventListener("click", ()=>{
        task.remove();
    });

    //clear output

    input.value = "";
});