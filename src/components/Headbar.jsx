import logoIcon from '../images/logo-icon.jpeg';
import shoppingCartIcon from '../images/shopping-cart-icon.svg';
import userIcon from '../images/user-icon.svg';

const Headbar = () => {
    return (
        <div className='headbar'>
            <div className='headbar'>
                <img className='logo-icon' src={logoIcon} alt='logo glutennly' />
            </div>
            <div className='headbar'>

            </div>
            <div className='headbar headbar-incons-box'>
                <img className='headbar-icons' src={shoppingCartIcon} alt='logo wózka sklepowego' />
                <img className='headbar-icons' src={userIcon} alt='logo użytkownika' />
            </div>
        </div>
    );
}

export default Headbar;