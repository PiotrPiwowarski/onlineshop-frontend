import { useState, useEffect } from 'react';
import Product from './Product';
import { getProductByCategory } from '../services/Product';
import { useLocation } from 'react-router-dom';

const ProductsOfCategory = ({setShoppingCart}) => {
	const [productsList, setProductsList] = useState(null);
	const location = useLocation();
	const { category } = location.state;
	useEffect(() => {
		getProductByCategory(category)
			.then((response) => setProductsList(response.data))
			.catch((error) => console.log(error));
	}, [category]);
	return (
		<div className='subpage-bg'>
			<div className='main-section-header'>
				<h1 className='main-section-header-title'>
					{category === 'bread' ? 'Chleby' : category === 'drink' ? 'Napoje' : category === 'sweet' ? 'Słodycze' : 'Inne'}
				</h1>
			</div>
			<div className='all-products'>
				{productsList !== null ? (
					productsList.map((product) => {
						return <Product key={product.id} product={product} />;
					})
				) : (
					<p>Ładowanie...</p>
				)}
			</div>
		</div>
	);
};

export default ProductsOfCategory;
