const buttonEditElement = document.querySelector(".profile__edit-button");

function showEditProfileForm() {
  const editProfileFormElement = document.querySelector(".popup");
  editProfileFormElement.className += " popup_opened";
}
buttonEditElement.addEventListener("click", showEditProfileForm);

const inputNameElement = document.querySelector(".form__item_name");
inputNameElement.value = "Jacques Cousteau";
const inputAboutElement = document.querySelector(".form__item_about-me");
inputAboutElement.value = "Explorador";
const buttonSaveFormElement = document.querySelector(".form__button_submit");
let inputNameValue = "";
let inputAboutValue = "";
function handleEditProfileForm() {
  inputNameValue = inputNameElement.value; //se guarda el valor
  inputAboutValue = inputAboutElement.value;
  if (inputNameValue.trim() && inputAboutValue.trim()) {
    buttonSaveFormElement.removeAttribute("disabled");
  } else {
    buttonSaveFormElement.setAttribute("disabled", "true");
  }
}

inputNameElement.addEventListener("keyup", handleEditProfileForm);
inputAboutElement.addEventListener("keyup", handleEditProfileForm);

const buttonCloseElement = document.querySelector(".form__close-icon");
function closeFormEditProfile() {
  const closeFormEditProfileElement = document.querySelector(".popup");
  closeFormEditProfileElement.classList.remove("popup_opened");
  console.log(closeFormEditProfileElement);
}
buttonCloseElement.addEventListener("click", closeFormEditProfile);
function saveEditProfile() {
  const nameElement = document.querySelector(".profile__name");
  const aboutElement = document.querySelector(".profile__info-aboutme");
  nameElement.innerHTML = inputNameValue;
  aboutElement.innerHTML = inputAboutValue;
}
buttonSaveFormElement.addEventListener("click", saveEditProfile);
