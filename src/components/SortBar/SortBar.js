import './SortBar.css'
export default function SortBar(props) {
    return (
        <div className="sort-bar">
            <h2 className="sort-bar__title">
                Сортировка
            </h2>
            <button className="sort-bar__button" onClick={props.sortUsersCity}>по городу</button>
            <button className="sort-bar__button" onClick={props.sortUsersCompany}>по компании</button>
        </div>
    )
}