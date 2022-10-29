import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      textButton={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <fieldset className="popup__profile-info popup__profile-info_avatar">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar"
          type="url"
          name="avatar"
          ref={avatarRef}
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error avatar-error " />
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
