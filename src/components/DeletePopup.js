import PopupWithForm from "./PopupWithForm";

function DeletePopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onDeletingCard(props.card);
    }

    return(
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
        name='delete' title='Вы уверены?' textButton={props.isLoading ? "Удаление..." : "Да"} />
    )
}
export default DeletePopup;