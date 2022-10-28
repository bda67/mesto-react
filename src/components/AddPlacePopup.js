import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from 'react'; 

function AddPlacePopup(props) {
    const nameRef = useRef();
    const linkRef = useRef();

function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
        name: nameRef.current.value,
        link: linkRef.current.value
    });
    e.target.reset()
}


    return(
    <PopupWithForm name='add' title='Новое место'
    isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} textButton={props.isLoading ? "Создание..." : "Создать"}>
        <fieldset className="popup__profile-info">    
            <input className="popup__input popup__input_type_name popup__input_type_cardName" id="placeNameInput" type="text" 
            name="name" placeholder="Название" ref={nameRef} minLength="2" 
            maxLength="30" required/>
            <span className="placeNameInput-error popup__input-error "/>
            <input className="popup__input popup__input_type_bio popup__input_type_cardLink" id="linkInput" 
            type="url" name="link" placeholder="Ссылка на картинку" ref={linkRef} required/>
            <span className="linkInput-error popup__input-error"/>
        </fieldset>
    </PopupWithForm>)
}

export default AddPlacePopup;