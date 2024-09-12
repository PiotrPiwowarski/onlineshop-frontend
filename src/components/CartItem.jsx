const CartItem = ({ item, setCartItems }) => {
	const handleRemoveFromCart = () => {
		setCartItems((prev) => {
			return prev.filter((i) => i.id !== item.id);
		});
	};

	return (
		<div className='product'>
			<div className='product-content'>
				<div>
					<p className='text-color'>{item.id}</p>
					<p className='text-color'>{item.product.name}</p>
					<p className='text-color'>{item.product.price} zł</p>
				</div>
				<div>
					<button className='button red-button' onClick={handleRemoveFromCart}>
						Usuń
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
