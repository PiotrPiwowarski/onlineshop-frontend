import AllProducts from './components/AllProducts';
import Categories from './components/Categories';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const [toggleCategories, setToggleCategories] = useState(false);
	return (
		<Router className='application'>
			<header>
				<Header setToggleCategories={setToggleCategories} />
			</header>
			<main className='main-app-area'>
				<Categories toggleCategories={toggleCategories} />
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
