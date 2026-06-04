const settings = document.querySelector(".settings");
const modal = document.querySelector(".settings-modal");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});