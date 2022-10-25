import closeIcon from '../images/Close__Icon.svg';

function PopupWithForm({name, title, children, onClose, isOpen, onSubmit, textButton}) {
    return(
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className={`popup__container popup__container-${name}`}>
                <button className="popup__button-close" type="button" onClick={onClose}>
                    <img className="popup__button-img" alt="крестик" src={closeIcon}/>
                </button>
                <form className={`popup__form popup__form_${name}`} name={name} onSubmit={onSubmit} noValidate>
                        <h2 className="popup__title">{title}</h2>
                        {children}
                        <button className="popup__button-submit" type="submit">{textButton}</button>
                    </form>
            </div>
        </div>
    );
}

export default PopupWithForm;


//popup_type_${name}