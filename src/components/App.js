import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import React, { useState, useEffect } from "react";
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api';
//import DeletePopup from './DeletePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); 
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
 // const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([userData, cards]) => {
      setCards(cards);
      setCurrentUser(userData);
    })
    .catch((error) => {
        console.log(error)
    })
}, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((error) => {
      console.log(error)
  });
}
function handleCardDelete(card) {
  api.deleteIdCard(card)
  .then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id));
    closeAllPopups();
  })
  .catch((error) => {
    console.log(error)
});
}
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  /*const handleDeleteBtnClick = (card) => {
    setIsDeletePopupOpen(true);
    setSelectedCard(card);
  }*/

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api.setUserData(data)
    .then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((error) => {
      console.log(error)
  })
  .finally(() => setIsLoading(false))
  }
  function handleUpdateAvatar(data) {
    setIsLoading(true);
    api.setAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((error) => {
        console.log(error)
    })
    .finally(() => setIsLoading(false))
  }
  function handlePlaceUpdate(card) {
    setIsLoading(true);
    api.createNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      })
      .catch((error) => {
        console.log(error)
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <>
    <CurrentUserContext.Provider value ={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}  
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
        setCards={setCards}
      />
      <Footer />

      <AddPlacePopup onAddPlace={handlePlaceUpdate} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} isLoading={isLoading} />
      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} isLoading={isLoading} />
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} isLoading={isLoading}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isLoading={isLoading}/>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;
