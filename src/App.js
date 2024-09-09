import AllProducts from './components/AllProducts';
import Menu from './components/Menu';
import HeaderComponent from './components/HeaderComponent';
import ProductDetails from './components/ProductDetails';
import FooterComponent from './components/FooterComponent';
import ProductsOfCategory from './components/ProductsOfCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleCategories, setToggleCategories] = useState(false);
	const [shoppingCart, setShoppingCart] = useState(null);
	return (
		<Router>
			<div className='application'>
				<header className='header'>
					<HeaderComponent
						setToggleMenu={setToggleMenu}
						setToggleCategories={setToggleCategories}
					/>
				</header>
				<main className='main'>
					<Menu
						toggleMenu={toggleMenu}
						toggleCategories={toggleCategories}
						setToggleCategories={setToggleCategories}
					/>
					<Routes>
						<Route path='/' element={<AllProducts setShoppingCart={setShoppingCart} />} />
						<Route path='/productDetails' element={<ProductDetails setShoppingCart={setShoppingCart} />} />
						<Route path='/productsOfCategory' element={<ProductsOfCategory setShoppingCart={setShoppingCart} />} />
					</Routes>
				</main>
				<footer className='footer'>
					<FooterComponent />
				</footer>
			</div>
		</Router>
	);
};

export default App;
