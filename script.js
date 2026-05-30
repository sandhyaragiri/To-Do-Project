const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");
const theme = document.querySelector("#theme");
const paras = document.querySelectorAll("p");

paras.forEach((para)=>{
    console.log(para.textContent);
})

//toggle theme here goes..

theme.addEventListener("click", ()=>{
   document.body.classList.toggle("dark");
   
   if(document.body.classList.contains("dark")) {
    theme.textContent = "☀️";
   }

   else {
    theme.textContent = "🌙";
   }
});


button.addEventListener("click", ()=>{
    if(input.value === ""){
        return;
    }

    const task = document.createElement("div");
    const text = document.createElement("p");
    const deleteBtn = document.createElement("button");

    text.textContent = input.value;
    deleteBtn.textContent = "Task Done";

//CSS class
task.classList.add("task");

// append text and button INSIDE task
    task.append(text);
    task.append(deleteBtn);

    // append task INSIDE container
    container.append(task);

    /* //delete functionality */
    deleteBtn.addEventListener("click", () => {
        container.prepend(task);
    
    if (!task.classList.contains("completed")) {
        task.classList.add("completed");
        deleteBtn.textContent = "Discard";
        deleteBtn.classList.add("remove-btn");
    } 
    else {
        task.remove();
    }
});

    //clear output
    input.value = "";
     input.focus();
    
});

//enter key
 input.addEventListener("keydown", (e)=>{
        if(e.key === "Enter")
        button.click();
    });