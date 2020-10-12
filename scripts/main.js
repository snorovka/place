//cards array
const initialCards = [
  {
      name: 'Greece',
      link: './images/cards_myrtos.png'
  },
  {
      name: 'Scotland',
      link: './images/cards_scotland.png'
  },
  {
      name: 'Tbilisi',
      link: './images/cards_tbilisi.png'
  },
  {
      name: 'Baikal',
      link: './images/cards_baikal.png'
  },
  {
      name: 'Altai',
      link: './images/cards_altai.png'
  },
  {
      name: 'Georgia',
      link: './images/cards_georgia.png'
  }
];

//cards array
const initialCardsContainer = document.querySelector(".cards");

//popup var
let popupProfile = document.querySelector('.popup');

//form var
let popupForm = document.querySelector('#profile-edit');

//buttons var
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popupProfile.querySelector('.popup__close');
let popupSaveButton = popupProfile.querySelector('.popup__save');

//profile var
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//popup input textarea var
let inputName = document.querySelector('#name');
let inputJob = document.querySelector('#job');

//add cards from array to container cards
  const addCardToContainer = (cardItem) => {
  const cardElement = document.querySelector("#cardTemplate").content.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = cardItem.name;
  cardElement.querySelector(".card__image").src = cardItem.link;

  //delete card
  cardElement.querySelector('.card__delete').addEventListener ('click', event => {
    const card = event.target.closest('.card');
    card.remove()
  });

  initialCardsContainer.prepend(cardElement);
}

initialCards.forEach(addCardToContainer);

//open-close popup
  const popupToggle = function () {
  popupProfile.classList.toggle('popup_opened');
}
popupCloseButton.addEventListener ('click', popupToggle);

//default profile textareas
const popupOpen = function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupToggle();
}
popupEditButton.addEventListener ('click', popupOpen);

//edit profile textareas
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupToggle();
}
popupForm.addEventListener('submit', formSubmitHandler);
