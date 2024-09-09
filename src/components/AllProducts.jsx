import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/Product';
import Product from './Product';

const AllProducts = ({setShoppingCart}) => {
	const [productsList, setProductsList] = useState(null);
	useEffect(() => {
		getAllProducts()
			.then(response => setProductsList(response.data))
			.catch(error => console.log(error));
	}, []);
	return (
		<div className='subpage-bg'>
			<div className='main-section-header'>
				<h1 className='main-section-header-title'>Wszystkie</h1>
			</div>
			<div className='all-products'>
				{productsList !== null ? productsList.map((product) => {
					return <Product key={product.id} product={product} />;
				}) : <p>Ładowanie...</p>}
			</div>
		</div>
	);
};

export default AllProducts;
