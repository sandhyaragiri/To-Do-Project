const accentSelector = document.querySelector("#accentSelector");

accentSelector.addEventListener("change", function () {
    document.documentElement.style.setProperty(
        "--accent-color",this.value);
});