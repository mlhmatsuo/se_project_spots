const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An Outdoor Cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest...",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain House",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");

const profileTitle = document.querySelector(".profile__title");

const profileSubtitle = document.querySelector(".profile__subtitle");

const modalForm = editProfileModal.querySelector(".modal__form");

const profileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const profileSubmitButton = editProfileModal.querySelector(
  ".modal__submit-button"
);

const nameInputField = editProfileModal.querySelector("#name");

const descriptionInputField = editProfileModal.querySelector("#description");

const cardTemplate = document.querySelector("#card__template");

const cardsList = document.querySelector(".cards__list");

function openModal() {
  nameInputField.value = profileTitle.textContent;
  descriptionInputField.value = profileSubtitle.textContent;
  editProfileModal.classList.add("modal__opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal__opened");
}

function submitProfileForm(event) {
  event.preventDefault();
  profileTitle.textContent = nameInputField.value;
  profileSubtitle.textContent = descriptionInputField.value;
  closeModal();
}

function getCardElement(data) {
  console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  cardTitleElement.textContent = data.name;
  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}

profileEditButton.addEventListener("click", function () {
  openModal();
});

profileCloseButton.addEventListener("click", function () {
  closeModal();
});

modalForm.addEventListener("submit", function () {
  submitProfileForm(event);
});
