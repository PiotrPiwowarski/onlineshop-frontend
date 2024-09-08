
const UserBar = ({toggleUserBar}) => {
    return (
        <div className={`sidebar ${toggleUserBar === true ? 'visible' : 'hidden'}`}>
            <button className="button sidebar-button">Zaloguj się</button>
            <button className="button sidebar-button">Zarejestruj się</button>
        </div>
    );
}

export default UserBar;