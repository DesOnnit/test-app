import './UserCard.css';
export default function UserCard(props) {
    function handleEditProfile(user) {
        props.clickEdit(user.id)
    }
    return (
        <div className="user-card__container">
            <div className="user-card__container__info">
                <p className="user-card__container__info__subtitle">ФИО:</p>
                <p className="user-card__container__info__title">{props.name}</p>
            </div>
            <div className="user-card__container__info">
                <p className="user-card__container__info__subtitle">город:</p>
                <p className="user-card__container__info__title">{props.address_city}</p>
            </div>
            <div className="user-card__container__info">
                <p className="user-card__container__info__subtitle">компания:</p>
                <p className="user-card__container__info__title">{props.company_name}</p>
            </div>
            <button type="button" className="user-card__container__button" onClick={() => handleEditProfile(props.user)}>Подробнее</button>
        </div>
    )
}