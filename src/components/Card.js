import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
 // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;
// Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (`element__button-delete ${isOwn ? 'element__button-delete_visible' : 'element__button-delete_hidden'}`);
// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
// Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`element__button-like ${isLiked ? 'element__button-like_activated' : 'element__button-like'}`);
       
    function handleClickOnCard() {
        props.onCardClick(props.card);
    }
    function handleClickOnLike() {
        props.onCardLike(props.card);
    }
    function handleClickOnDel() {
        props.onCardDelete(props.card);
    }

    return(
        <div className="template">
            <li className="element__item">
                <div className="element__image" onClick={handleClickOnCard} style={{ backgroundImage:`url(${props.card.link})`}} />               
                <button className={cardDeleteButtonClassName} onClick={handleClickOnDel} type="button"></button>
                <div className="element__card">
                    <h2 className="element__name">{props.card.name}</h2>
                    <div className="element__column">
                        <button className={cardLikeButtonClassName} onClick={handleClickOnLike} type="button"></button>
                        <p className="element__counter">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
        </div> 
    )
}

export default Card;