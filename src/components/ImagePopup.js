import closeIcon from '../images/Close__Icon.svg';

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_picture ${(!!card.name && !!card.link) ? 'popup_opened' : ''}`}>
            <div className="popup__container-picture">
                <button className="popup__button-close popup__button-close_fig" type="button" onClick={onClose}>
                    <img className="popup__button-img" alt="крестик" src={closeIcon}/>
                </button>
                <figure className="popup__fig">
                    <img className="popup__picture" src={card.link} alt={card.name}/>
                    <figcaption className="popup__caption">{card.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;