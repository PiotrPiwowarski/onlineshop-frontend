import { getProductById } from '../services/Product';
import { useState, useEffect } from 'react';

const ProductDetails = ({productId}) => {
	const [product, setProduct] = useState(null);
	useEffect(() => {
		getProductById(productId)
			.then((response) => setProduct(response.data))
			.catch((error) => console.log(error));
	}, [productId]);
	return (
		<div className='subpage-bg'>
			<h1 className='subpage-header'>Szczegóły produktu</h1>
			<div className='subpage-content'>
				{product ? (
					<table>
						<tbody>
							<tr>
								<th>Nazwa</th>
								<td>{product.name}</td>
							</tr>
							<tr>
								<th>Id</th>
								<td>{product.id}</td>
							</tr>
							<tr>
								<th>Typ produktu</th>
								<td>{product.productType}</td>
							</tr>
							<tr>
								<th>Cena</th>
								<td>{product.price}</td>
							</tr>
							<tr>
								<th>Opis</th>
								<td>{product.description}</td>
							</tr>
						</tbody>
					</table>
				) : (
					<p>Ładowanie...</p>
				)}
			</div>
			<button className='button green-button'>Do koszyka</button>
		</div>
	);
};

export default ProductDetails;
