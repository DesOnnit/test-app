import UserCard from '../UserCard/UserCard';
import './UsersList.css';
export default function UsersList(props) {
    return (
        <div className="users-list">
            <p className="users-list__title">
                Список пользователей
            </p>
            <div className={!props.statusPreloader ? "users-list__container" : "users-list__list__container_hide"}>
                {props.users.map((user) => (
                    <UserCard
                        user={user}
                        key={user.id}
                        name={user.name}
                        address_city={user.address.city}
                        company_name={user.company.name}
                        clickEdit={props.clickEdit}
                    />
                ))}
                <p className="users-list__find">Найдено 10 пользователей</p>
            </div>
        </div>
    )
}