import { addToCart } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  const dispatch = useAppDispatch();
  const numInCart = useAppSelector(
    (state) => state.cart.items.find((item) => item.id === id)?.quantity,
  );

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          {numInCart && numInCart > 0 && <span>{numInCart} in cart</span>}
          <button onClick={handleAddToCart}>
            Add {numInCart && numInCart > 0 ? "more" : "to Cart"}
          </button>
        </p>
      </div>
    </article>
  );
}
