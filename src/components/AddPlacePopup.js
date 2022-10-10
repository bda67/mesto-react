import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    return(<PopupWithForm name='add' title='Новое место'
    isOpen={props.isOpen} onClose={props.onClose}>
        <fieldset className="popup__profile-info">    
            <input className="popup__input popup__input_type_name popup__input_type_cardName" id="placeNameInput" type="text" 
            name="name" placeholder="Название" readOnly required/>
            <span className="placeNameInput-error popup__input-error "/>
            <input className="popup__input popup__input_type_bio popup__input_type_cardLink" id="linkInput" 
            type="url" name="link" placeholder="Ссылка на картинку" readOnly required/>
            <span className="linkInput-error popup__input-error"/>
        </fieldset>
    </PopupWithForm>)
}

export default AddPlacePopup;