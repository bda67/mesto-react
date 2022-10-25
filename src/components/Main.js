import editButton from '../images/edit.svg';
import addButton from '../images/add.svg';
import { useContext } from "react";
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

    const currentUser = useContext(CurrentUserContext);

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__editicon" onClick={props.onEditAvatar}>
                    <img className="profile__photo"  src={`${currentUser.avatar}`}  alt="Ваше фото"/>   
                </div>
                <div className="profile__info">
                    <div className="profile__wrapper">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}>
                            <img className="profile__button-img" src={editButton} alt="значок карандаша"/>
                        </button>
                    </div>    
                    <p className="profile__bio">{currentUser.about}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}>
                    <img className="profile__button-img-add" src={addButton} alt="Знак плюс"/>
                </button>
            </section>
            <section className="elements">
                <ul className="element">
                    {props.cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;