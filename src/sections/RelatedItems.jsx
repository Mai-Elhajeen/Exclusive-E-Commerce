import React from "react";
import {
  HeadTitle,
  CardProduct,
} from "../components";
import { products } from "../data/productsData";
import styles from "./styles.module.css";
import { useCart } from "../context/CartContext";


const RelatedItems = () => {
  const itemsPerPage = 4;
  const visibleProducts = products.slice(0, itemsPerPage);
  const { addToCart } = useCart();

  return (
    <section className={styles.section}>
      <HeadTitle title="Related Item" />

      <div className={styles.cards}>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            badgeType={product.badgeType}
            image={product.image}
            rating={product.rating}
            views={product.views}
            showFavorite={product.showFavorite}
            showView={product.showView}
            showColors={product.showColors}
            showAddToCart={product.showAddToCart}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedItems;
