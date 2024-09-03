import {Link} from 'react-router-dom';

const Product = () => {
    return(
        <section>
            <h1>Product Page</h1>
            <ul>
                <li>
                    <Link to='product/p1'>product 1</Link>
                </li>
                <li>
                    <Link to="product/p2">product 2</Link>
                </li>
                <li>
                    <Link to="products/p3">product 3</Link>
                </li>
            </ul>
        </section>
    );
};

export default Product;