//массив карточек
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Воронеж',
      link: 'https://images.unsplash.com/photo-1567345242672-1c9cd67cb860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
  }
];

console.log(initialCards);

//контейнер массива карточек
const initialCardsContainer = document.querySelector(".cards");


//переменные форм popup
let popupProfile = document.querySelector('#profile-edit');
//console.log(popupProfile);
//let popupCard = document.querySelector('#card-add');
const addCardForm = document.querySelector('#card-add');


//переменные и константы кнопок
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popupProfile.querySelector('.popup__close');
let popupSaveButton = popupProfile.querySelector('.popup__save');

const cardAddButton = document.querySelector('.profile__add-button');

//переменные полей profile
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//переменные полей формы popup
let inputName = document.querySelector('#name');
let inputJob = document.querySelector('#job');



//добавление карточек из массива в контейнер
  const addCardToContainer = (cardItem) => {
  const cardElement = document.querySelector("#cardTemplate").content.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = cardItem.name;
  cardElement.querySelector(".card__image").src = cardItem.link;

  //удаление карточки
  cardElement.querySelector('.card__delete').addEventListener ('click', event => {
    const card = event.target.closest('.card');
    card.remove()
  });

  initialCardsContainer.prepend(cardElement);
  //console.log(cardElement);
  //return cardElement;
}

initialCards.forEach(addCardToContainer);

//переменные полей формы добавления карточки card
//const inputCardName = document.querySelector('#card-name');
//const inputCardImage = document.querySelector('#card-image');

//функция открытия-закрытие формы popup
function popupToggle() {
  popupProfile.classList.toggle('.popup_opened');
}

//popupCloseButton.addEventListener ('click', function() {
  //popupToggle(popupCard)
  //});

//открытие формы добавления карточки card по кнопке "+"
//cardAddButton.addEventListener('click', function() {
  //popupToggle(popupCard)
  //});

//const cardAdd = function () {
  //inputName.value = profileName.textContent;
  //inputJob.value = profileJob.textContent;
  //popupToggle();
//}
//cardAddButton.addEventListener ('click', cardAdd);

//добавление карточки card по кнопке "+"
//addCardForm.addEventListener('submit', event => {
  //event.preventDefault();

  //const cardEl = document.querySelector(".card");
  //console.log(cardEl);

  //cardEl = addCardForm.querySelector('#card-name').value;
  //cardEl.link = addCardForm.querySelector('#card-image').value;
  //console.log(cardEl);

  //addCardToContainer(cardEl);

  //addCardForm.reset();
  //popupToggle();

//});


//редактирование полей profile по кнопке "редактировать"
const popupOpen = function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupToggle();
}
popupEditButton.addEventListener ('click', popupOpen);

//сохранение полей profile по кнопке "сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupToggle();
}
popupProfile.addEventListener ('submit', formSubmitHandler);
