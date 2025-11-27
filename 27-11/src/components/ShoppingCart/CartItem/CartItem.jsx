function CartItem({ item, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <>
      <h3>Name: {item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Category: {item.category}</p>
      <br></br>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onDecreaseQuantity(item)}>-</button>
      <button onClick={() => onIncreaseQuantity(item)}>+</button>
    </>
  );
}

export default CartItem;
