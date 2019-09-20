var popup = document.querySelector(".modal-content");
var popupOpen = document.querySelector(".btn-write-us");
var popupClose = document.querySelector(".modal-content-close");

popupOpen.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
})

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
})
