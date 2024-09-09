
const Menu = ({ toggleMenu, toggleCategories, setToggleCategories }) => {
    const handleClickButton = () => {
        setToggleCategories(prev => !prev);
    }
	return (
		<div
			className='menu'
			style={{ display: toggleMenu === true ? 'block' : 'none' }}>
			<button className='button sidebar-button' onClick={handleClickButton}>Kategorie</button>
			<div className="categories" style={{display: toggleCategories === true ? 'block' : 'none'}}>
				<button className='button sidebar-button'>Wszystkie</button>
				<button className='button sidebar-button'>Chleby</button>
				<button className='button sidebar-button'>Napoje</button>
				<button className='button sidebar-button'>Słodycze</button>
				<button className='button sidebar-button'>Inne</button>
			</div>
			<button className='button sidebar-button'>Regulamin</button>
			<button className='button sidebar-button'>O nas</button>
			<button className='button sidebar-button'>Kontakt</button>
		</div>
	);
};

export default Menu;
