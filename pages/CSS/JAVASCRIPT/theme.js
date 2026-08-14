const themeToggle = document.querySelector("#themeToggle");


// GET SAVED THEME

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}


// TOGGLE ONLY IF THE BUTTON EXISTS

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️";
            themeToggle.title = "Light Mode";
        }

        else {
            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙";
            themeToggle.title = "Dark Mode";
        }

    });

}