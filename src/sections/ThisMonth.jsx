import React from "react";
import { HeadTitle, Title, Btn, CardProduct, Line } from "../components";
import { products } from "../data/productsData";
import styles from "./styles.module.css";
const ThisMonth = () => {
  const start = products.id= 6;
  const end = products.id= 10;
  const visibleProducts = products.slice(start, end)
  return (
    <section className={styles.section}>
      <HeadTitle title="This Month" />
      <div className={styles.flex}>
        <Title title="Best Selling Products" />
        <Btn label="View All" space="0" />
      </div>

      <div className={styles.cards}>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
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
          />
        ))}
      </div>
    </section>
  );
};

export default ThisMonth;
