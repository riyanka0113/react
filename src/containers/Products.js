import React from 'react';

import ProductItem from '../components/Products/ProductItem';
// import {ProductContext} from '../context/product-context'
import { useStore } from '../hook/store';
import './Products.css';

const Products = props => {
  // const productList = useContext(ProductContext).products;

  const state = useStore()[0];
  
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
