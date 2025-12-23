import React from "react";
import { HeadTitle, Title, Btn, CardProduct } from "../components";
import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ThisMonth = ({ isLoggedIn, favoriteItems = [], toggleFavorite }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const start = 6;
  const end = 10;
  const visibleProducts = products.slice(start, end);

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
            isLoggedIn={isLoggedIn}
            isFavorite={favoriteItems.includes(product.id)}
            onToggleFavorite={() => toggleFavorite(product.id)}
            onAddToCart={() => {
              if (!isLoggedIn) {
                navigate("/login");
                return;
              }
              addToCart(product, 1);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ThisMonth;
