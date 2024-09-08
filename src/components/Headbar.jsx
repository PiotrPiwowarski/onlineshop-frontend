import logoIcon from '../images/logo-icon.jpeg';
import shoppingCartIcon from '../images/shopping-cart-icon.svg';
import userIcon from '../images/user-icon.svg';
import burgerMenuIcon from '../images/burger-menu-icon.svg';

const Headbar = ({setToggleCategoriesBar, setToggleUserBar}) => {

	const handleToggleCategoriesBar = () => {
		setToggleCategoriesBar(prev => !prev);
	}

	const handleToggleUserBar = () => {
		setToggleUserBar(prev => !prev);
	}

	return (
		<div className='headbar'>

			<div>
				<button className='button sidebar-button pictogram-button' onClick={handleToggleCategoriesBar}>
					<img
						className='headbar-icons'
						src={burgerMenuIcon}
						alt='logo menu hamburgerowego'
					/>
				</button>
			</div>

			<div>
				<img className='logo-icon' src={logoIcon} alt='logo glutennly' />
			</div>

			<div className='headbar-right-icons'>
				<button className='button sidebar-button'>
					<img
                        className='headbar-icons'
						src={shoppingCartIcon}
						alt='logo wózka sklepowego'
					/>
				</button>
				<button className='button sidebar-button' onClick={handleToggleUserBar}>
					<img
						className='headbar-icons'
						src={userIcon}
						alt='logo użytkownika'
					/>
				</button>
			</div>

		</div>
	);
};

export default Headbar;
