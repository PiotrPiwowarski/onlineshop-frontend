import {useNavigate} from 'react-router-dom';

const Product = ({ product, setCartItems }) => {

	const navigate = useNavigate();

	const handleGoToProductDetails = () => {
		navigate('/productDetails', {state: {productId: product.id}});
	}

	const handleAddToTheShoppingCart = () => {
		setCartItems(prev => {
			let id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
			return [...prev, {id: id, product: product}]
		})
	}

	return (
		<div className='product'>
			<div className="product-content">
				<div>
					<button onClick={handleGoToProductDetails} className='button sidebar-button'><p>{product.name}</p></button>
					<p className="text-color">{product.price} zł</p>
				</div>
				<div>
					<button className='button green-button' onClick={() => handleAddToTheShoppingCart(product)} >Do koszyka</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
