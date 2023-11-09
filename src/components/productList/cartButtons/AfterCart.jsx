import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../redux/myCart';
import './CartButtons.css';

const AfterCart = ({ cartCount, productId }) => {
    const dispatch = useDispatch();

    return (
        <div className="after-cart">
            <button className="cart-counter-button" onClick={() => dispatch(decrement(productId))}>
                -
            </button>
            <div className="cart-count">{cartCount}</div>
            <button className="cart-counter-button" onClick={() => dispatch(increment(productId))}>
                +
            </button>
        </div>
    );
};

export default AfterCart;