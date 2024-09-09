const Categories = ({ toggleCategories }) => {
    return (
        <div style={{display: toggleCategories === true ? 'block' : 'none'}}>
            {console.log(toggleCategories)}
            <button className='button sidebar-button'>Wszystkie</button>
        </div>
    );
}

export default Categories;