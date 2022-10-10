import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return(
        <PopupWithForm  name='edit' title='Редактировать профиль' 
        isOpen={props.isOpen} onClose={props.onClose}>
            <fieldset className="popup__profile-info">    
                <input className="popup__input popup__input_type_name" id ="nameInput" placeholder="Имя" 
                type="text" name="name" value='Душенька' readOnly required/>
                <span className="nameInput-error popup__input-error"/>
                <input className="popup__input popup__input_type_bio" id ="bioInput" 
                placeholder="Вид деятельности" type="text" name="about" value='Знаю фильмы гп наизусть' readOnly required/>
                <span className="bioInput-error popup__input-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;