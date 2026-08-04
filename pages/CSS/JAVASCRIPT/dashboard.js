const taskflow = document.querySelector("#taskflow");
const themeToggle = document.querySelector("#themeToggle");

//TOGGLE BACKGROUND COLOR OR THEME CODE GOES HERE
themeToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("bgColor");

if(document.body.classList.contains("bgColor")){
    themeToggle.textContent = "☀️";
    themeToggle.title = "light Mode";
}

else {
    themeToggle.textContent = "🌙";
}
});


taskflow.addEventListener("click", () => {
    window.location.href = "./pages/taskflow.html";
});

const settings = document.querySelector("#settings");

settings.addEventListener("click", () => {
   window.location.href = "./pages/settings.html";
});

const timer = document.querySelector("#timer");

timer.addEventListener("click", ()=>{
    alert("WORK IN PROGRESS");
});

const notes = document.querySelector("#notes");

notes.addEventListener("click", ()=>{
    alert("WORK IN PROGRESS");
});