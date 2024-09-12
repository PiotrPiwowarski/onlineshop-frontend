import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, setCartItems }) => {
	const countSum = (cartItems) => {
		return cartItems.reduce((sum, item) => (sum += item.product.price), 0);
	};

	const handleEmptyBasket = () => {
		setCartItems([]);
	};

	return (
		<div className='subpage-bg'>
			<h1 className='subpage-header'>Twój koszyk</h1>

			{cartItems.map((item) => {
				return (
					<CartItem key={item.id} item={item} setCartItems={setCartItems} />
				);
			})}
			<div className='summary'>
				<p className='text-color'>Do zapłaty: {countSum(cartItems)} zł</p>
			</div>
			<div>
				<button className='button red-button' onClick={handleEmptyBasket}>
					Opróżnij koszyk
				</button>
				<button className='button green-button'>Kup</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
