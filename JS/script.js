const editProfileFormElement = document.querySelector(".popup");
const buttonEditElement = document.querySelector(".profile__edit-button");
const buttonSaveFormElement = document.querySelector(".form__button_submit");
const buttonCloseElement = document.querySelector(".form__close-icon");
const inputNameElement = document.querySelector(".form__item_name");
const inputAboutElement = document.querySelector(".form__item_about-me");
let inputNameValue = "";
let inputAboutValue = "";

function showEditProfileForm() {
  editProfileFormElement.className += " popup_opened";
}
buttonEditElement.addEventListener("click", showEditProfileForm);

inputNameElement.value = "Jacques Cousteau";
inputAboutElement.value = "Explorador";
function handleEditProfileForm() {
  inputNameValue = inputNameElement.value.trim(); //se guarda el valor
  inputAboutValue = inputAboutElement.value.trim(); //se guarda el valor
  if (inputNameValue && inputAboutValue) {
    buttonSaveFormElement.removeAttribute("disabled");
  } else {
    buttonSaveFormElement.setAttribute("disabled", "true");
  }
}
inputNameElement.addEventListener("keyup", handleEditProfileForm);
inputAboutElement.addEventListener("keyup", handleEditProfileForm);

function closeFormEditProfile() {
  editProfileFormElement.classList.remove("popup_opened");
}
buttonCloseElement.addEventListener("click", closeFormEditProfile);

function saveEditProfile(event) {
  const nameElement = document.querySelector(".profile__name");
  const aboutElement = document.querySelector(".profile__info-aboutme");
  nameElement.innerHTML = inputNameValue;
  aboutElement.innerHTML = inputAboutValue;
  editProfileFormElement.classList.remove("popup_opened");
  buttonSaveFormElement.setAttribute("disabled", "true");
  event.preventDefault();
}
buttonSaveFormElement.addEventListener("click", saveEditProfile);
