import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      textButton={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <fieldset className="popup__profile-info">
        <input
          className="popup__input popup__input_type_name"
          id="nameInput"
          placeholder="Имя"
          type="text"
          name="name"
          value={name || ""}
          minLength="2"
          maxLength="40"
          onChange={handleName}
          required
        />
        <span className="nameInput-error popup__input-error" />
        <input
          className="popup__input popup__input_type_bio"
          id="bioInput"
          placeholder="Вид деятельности"
          type="text"
          name="about"
          value={description || ""}
          minLength="2"
          maxLength="200"
          onChange={handleDescription}
          required
        />
        <span className="bioInput-error popup__input-error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
