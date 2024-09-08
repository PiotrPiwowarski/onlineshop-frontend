import {useNavigate} from 'react-router-dom';

const Product = ({ product }) => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/productDetails', {state: {productId: product.id}});
	}

	return (
		<div className='product'>
			<div className="product-content">
				<div>
					<button onClick={handleClick} className='button sidebar-button'><p>{product.name}</p></button>
					<p className="text-color">{product.price} zł</p>
				</div>
				<div>
					<button className='button green-button'>Do koszyka</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
