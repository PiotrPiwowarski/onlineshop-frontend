import { useNavigate } from 'react-router-dom';

const Menu = ({ toggleMenu, toggleCategories, setToggleCategories }) => {
	const navigate = useNavigate();
	const handleClickButtonCategories = () => {
		setToggleCategories((prev) => !prev);
	};

	const handleClickButtonSpecificCategory = (category) => {
		if (category === 'all') {
			navigate('/');
		} else if (category === 'bread') {
			navigate('/productsOfCategory', { state: { category: 'bread' } });
		} else if (category === 'drink') {
			navigate('/productsOfCategory', { state: { category: 'drink' } });
		} else if (category === 'sweet') {
			navigate('/productsOfCategory', { state: { category: 'sweet' } });
		} else {
			navigate('/productsOfCategory', { state: { category: 'other' } });
		}
	};
	return (
		<div
			className='menu'
			style={{ display: toggleMenu === true ? 'block' : 'none' }}>
			<button
				className='button sidebar-button'
				onClick={handleClickButtonCategories}>
				Kategorie
			</button>
			<div
				className='categories'
				style={{ display: toggleCategories === true ? 'block' : 'none' }}>
				<button
					className='button sidebar-button'
					onClick={() => handleClickButtonSpecificCategory('all')}>
					Wszystkie
				</button>
				<button
					className='button sidebar-button'
					onClick={() => handleClickButtonSpecificCategory('bread')}>
					Chleby
				</button>
				<button
					className='button sidebar-button'
					onClick={() => handleClickButtonSpecificCategory('drink')}>
					Napoje
				</button>
				<button
					className='button sidebar-button'
					onClick={() => handleClickButtonSpecificCategory('sweet')}>
					Słodycze
				</button>
				<button
					className='button sidebar-button'
					onClick={() => handleClickButtonSpecificCategory('other')}>
					Inne
				</button>
			</div>
			<button className='button sidebar-button'>Regulamin</button>
			<button className='button sidebar-button'>O nas</button>
			<button className='button sidebar-button'>Kontakt</button>
		</div>
	);
};

export default Menu;
