import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/myCart';
import './CartButtons.css';

const BeforeCart = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="before-cart">
            <button className="add-cart-button" onClick={() => dispatch(addToCart(product))}>
                Add to cart
            </button>
        </div>
    );
};

export default memo(BeforeCart);