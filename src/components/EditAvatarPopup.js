import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return(<PopupWithForm name='avatar' title='Обновить аватар'
    isOpen={props.isOpen} onClose={props.onClose}>
        <fieldset className="popup__profile-info popup__profile-info_avatar">    
            <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar" 
            placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error avatar-error "/>
        </fieldset>
    </PopupWithForm>)
}

export default EditAvatarPopup;