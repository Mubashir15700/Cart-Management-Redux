import products from '../../api/productData.json';
import DisplayButtons from './cartButtons/DisplayButtons';
import './ProductList.css';

const ProductList = () => {

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="product" />
          <h3>{product?.title}</h3>
          <DisplayButtons product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductList;