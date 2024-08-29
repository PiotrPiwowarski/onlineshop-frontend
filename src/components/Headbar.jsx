import logoIcon from '../images/logo-icon.jpeg';
import shoppingCartIcon from '../images/shopping-cart-icon.svg';
import userIcon from '../images/user-icon.svg';
import burgerMenuIcon from '../images/burger-menu-icon.svg';

const Headbar = ({setCategoriesBarVisibility, setUserBarVisibility}) => {

	const handleCategoriesBarVisibility = () => {
		setCategoriesBarVisibility(prev => !prev);
	}

	const handleUserBarVisibility = () => {
		setUserBarVisibility(prev => !prev);
	}

	return (
		<div className='headbar'>

			<div>
				<button className='button pictogram-button' onClick={handleCategoriesBarVisibility}>
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

			<div>
				<button className='button'>
					<img
                        className='headbar-icons'
						src={shoppingCartIcon}
						alt='logo wózka sklepowego'
					/>
				</button>
				<button className='button' onClick={handleUserBarVisibility}>
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
