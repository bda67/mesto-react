import editButton from '../images/edit.svg';
import addButton from '../images/add.svg';
import cousteauAvatar from '../images/jacque-yves_cousteau.jpg';
import api from "../utils/Api.js";
import { useEffect, useState } from "react";
import Card from './Card.js';

function Main(props) {
    const [userName, getUserName] = useState('dhfskj');
    const [userAvatar, getUserAvatar] = useState(cousteauAvatar);
    const [userDescription, getUserDescription] = useState('Я лох');
    const [cards, getCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([userData, cardsData]) => {
            getUserName(userData.name);
            getUserDescription(userData.about);
            getUserAvatar(userData.avatar);
            getCards(cardsData);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__editicon" onClick={props.onEditAvatar}>
                    <img className="profile__photo"  src={`${userAvatar}`}  alt="Ваше фото"/>   
                </div>
                <div className="profile__info">
                    <div className="profile__wrapper">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}>
                            <img className="profile__button-img" src={editButton} alt="значок карандаша"/>
                        </button>
                    </div>    
                    <p className="profile__bio">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}>
                    <img className="profile__button-img-add" src={addButton} alt="Знак плюс"/>
                </button>
            </section>
            <section className="elements">
                <ul className="element">
                    {cards.map(card => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                    ))};
                </ul>
            </section>
        </main>
    )
}

export default Main;