const themeToggle = document.querySelector("#themeToggle");


// APPLY SAVED THEME WHEN PAGE LOADS

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
        themeToggle.title = "Light Mode";
    }
}

// TOGGLE THEME

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {

            themeToggle.textContent = "☀️";
            themeToggle.title = "Light Mode";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙";
            themeToggle.title = "Dark Mode";

            localStorage.setItem("theme", "light");
        }
    });

}