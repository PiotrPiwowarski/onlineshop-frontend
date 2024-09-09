import AllProducts from './components/AllProducts';
import Menu from './components/Menu';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleCategories, setToggleCategories] = useState(false);
	return (
		<Router className='application'>
			<header>
				<Header setToggleMenu={setToggleMenu} setToggleCategories={setToggleCategories} />
			</header>
			<main className='main-app-area'>
				<Menu toggleMenu={toggleMenu} toggleCategories={toggleCategories} setToggleCategories={setToggleCategories} />
				<Routes>
					<Route path='/' element={<AllProducts />} />
					<Route path='/productDetails' element={<ProductDetails />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</Router>
	);
};

export default App;
