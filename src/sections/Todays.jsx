import React, { useState } from "react";

import {
  HeadTitle,
  Title,
  Timer,
  ArrowControls,
  CardProduct,
  Btn,
  Line,
} from "../components";
import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Todays = ({ isLoggedIn, favoriteItems = [], toggleFavorite }) => {
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  return (
    <section className={styles.section}>
      <HeadTitle />
      <div className={styles.flex}>
        <Title />
        <Timer targetDate="2025-12-31T23:59:59" variant="default" />
        <ArrowControls onPrev={handlePrev} onNext={handleNext} />
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

      <Btn label={"View All Products"} />
      <Line />
    </section>
  );
};

export default Todays;
