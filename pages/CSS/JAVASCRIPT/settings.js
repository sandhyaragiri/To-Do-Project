//HERE FOR FONT-STYLE JS CODE
const fontSelector = document.querySelector("#fontSelector");

fontSelector.addEventListener("change", function(){
    document.documentElement.style.setProperty("--font-family", this.value);
})
//HERE ACCENT COLOR JS CODE
const accentSelector = document.querySelector("#accentSelector");

accentSelector.addEventListener("change", function () {
    document.documentElement.style.setProperty(
        "--accent-color",this.value);
});