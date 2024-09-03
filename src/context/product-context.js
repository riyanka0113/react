import React, { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

const initialProduct = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export default (props) => {
  const [productList, setProductList] = useState(initialProduct);

  const toggleFavorite = (productId) => {
    setProductList((currentList) => {
      const prodIndex = currentList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentList[prodIndex].isFavorite;
      const updatedProducts = [...currentList];
      updatedProducts[prodIndex] = {
        ...currentList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider
      value={{ products: productList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
