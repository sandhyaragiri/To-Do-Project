const accentSelector = document.getElementById("#accentSelector");

accentSelector.addEventListener("change", () => {
    document.documentElement.style.setProperty(
        "--accent-color",
        accentSelector.value
    );
});