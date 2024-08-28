import logoIcon from '../images/logo-icon.jpeg';
import shoppingCartIcon from '../images/shopping-cart-icon.svg';
import userIcon from '../images/user-icon.svg';
import magnifyingGlass from '../images/magnifying-glass.svg';
import {useState} from 'react';

const Headbar = () => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    }

    return (
        <div className='headbar'>
            <div className='headbar'>
                <img className='logo-icon' src={logoIcon} alt='logo glutennly' />
            </div>
            <div className='headbar headbar-search-input'>
                <input className='search-input' type='text' placeholder='Szukaj'/>
                <button className='button' onClick={handleInputChange}><img className='headbar-icons' src={magnifyingGlass} alt='logo lupy' /></button>
            </div>
            <div className='headbar headbar-incons-box'>
                <button className='button'><img className='headbar-icons' src={shoppingCartIcon} alt='logo wózka sklepowego' /></button>
                <button className='button'><img className='headbar-icons' src={userIcon} alt='logo użytkownika' /></button>
            </div>
        </div>
    );
}

export default Headbar;