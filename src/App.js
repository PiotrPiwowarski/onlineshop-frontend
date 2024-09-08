import AllProducts from './components/AllProducts';
import CategoriesBar from './components/CategoriesBar';
import Headbar from './components/Headbar';
import UserBar from './components/UserBar';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

const App = () => {
	const [toggleCategoriesBar, setToggleCategoriesBar] = useState(false);
	const [toggleUserBar, setToggleUserBar] = useState(false);
	return (
		<div className='application'>
			<Headbar
				setToggleCategoriesBar={setToggleCategoriesBar}
				setToggleUserBar={setToggleUserBar}
			/>
			<div className='main-app-area'>
				<CategoriesBar
					toggleCategoriesBar={toggleCategoriesBar}
				/>
				<Router>
					<Routes>
						<Route path='/' element={<AllProducts />} />
						<Route path='/productDetails' element={<ProductDetails />} />
					</Routes>
				</Router>
				<UserBar
					toggleUserBar={toggleUserBar}
				/>
			</div>
		</div>
	);
};

export default App;
