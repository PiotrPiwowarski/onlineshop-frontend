import AllProducts from './components/AllProducts';
import Menu from './components/Menu';
import HeaderComponent from './components/HeaderComponent';
import ProductDetails from './components/ProductDetails';
import FooterComponent from './components/FooterComponent';
import ProductsOfCategory from './components/ProductsOfCategory';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
	const getInitialCartItems = () => {
		const savedCart = localStorage.getItem('cartItems');
		return savedCart ? JSON.parse(savedCart) : [];
	};

	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleCategories, setToggleCategories] = useState(false);
	const [cartItems, setCartItems] = useState(getInitialCartItems);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	  }, [cartItems]);

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
						<Route
							path='/'
							element={<AllProducts setCartItems={setCartItems} />}
						/>
						<Route path='/productDetails' element={<ProductDetails />} />
						<Route
							path='/productsOfCategory'
							element={<ProductsOfCategory />}
						/>
						<Route
							path='/shoppingCart'
							element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />}
						/>
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
