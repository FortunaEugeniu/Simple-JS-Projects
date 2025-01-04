'use strict';

const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

function showAndCloseModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

btnShowModal.forEach(button => {
  button.addEventListener("click", showAndCloseModal);
});

btnCloseModal.addEventListener("click", showAndCloseModal);

document.addEventListener("keydown", function (e) {
  console.log(`You pressed "${e.key}" button`);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    showAndCloseModal()
  }
})
