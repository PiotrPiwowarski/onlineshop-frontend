const CategoriesBar = ({ toggleCategoriesBar }) => {
    return (
        <div className={`sidebar ${toggleCategoriesBar === true ? 'visible' : 'hidden'}`}>
            <button className='button sidebar-button'>Wszystkie</button>
        </div>
    );
}

export default CategoriesBar;