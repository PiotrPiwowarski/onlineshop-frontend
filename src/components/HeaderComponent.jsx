import shoppingCartIcon from '../images/shopping-cart-icon.svg';
import logoIcon from '../images/logo-icon.svg';
import burgerMenuIcon from '../images/burger-menu-icon.svg';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = ({ setToggleMenu, setToggleCategories}) => {
	const navigate = useNavigate();
	const handleToggleCategories = () => {
		setToggleMenu((prev) => {
			if(prev === true) {
				setToggleCategories(false);
			}
			return !prev
		});
	};

	const handleClickLogo = () => {
		navigate('/');
	};

	return (
		<div className='header'>
			<div>
				<button
					className='button sidebar-button pictogram-button'
					onClick={handleToggleCategories}>
					<img
						className='rest-icons'
						src={burgerMenuIcon}
						alt='logo menu hamburgerowego'
					/>
				</button>
			</div>

			<div>
				<button className='button' onClick={handleClickLogo}>
					<img className='logo-icon' src={logoIcon} alt='logo glutennly' />
				</button>
			</div>

			<div className='headbar-right-icons'>
				<button className='button sidebar-button'>
					<img
						className='rest-icons'
						src={shoppingCartIcon}
						alt='logo wózka sklepowego'
					/>
				</button>
			</div>
		</div>
	);
};

export default HeaderComponent;
