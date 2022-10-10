
function Card(props) {
    function handleClickOnCard() {
        props.onCardClick(props.card);
    }; 
    
    return(
        <div className="template">
            <li className="element__item">
                <div className="element__image" onClick={handleClickOnCard} style={{ backgroundImage:`url(${props.card.link})`}} />               
                <button className="element__button-delete" type="button"></button>
                <div className="element__card">
                    <h2 className="element__name">{props.card.name}</h2>
                    <div className="element__column">
                        <button className="element__button-like" type="button"></button>
                        <p className="element__counter">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
        </div> 
    )
}

export default Card;