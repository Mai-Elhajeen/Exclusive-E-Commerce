import React, { useState } from "react";
import {
  HeadTitle,
  Title,
  ArrowControls,
  Btn,
  CardProduct,
} from "../components";
import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const OurProducts = ({ isLoggedIn, favoriteItems = [], toggleFavorite }) => {
  const itemsPerPage = 8;
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
      <HeadTitle title="Our Products" />
      <div className={styles.flex}>
        <Title title="Explore Our Products" />
        <ArrowControls onPrev={handlePrev} onNext={handleNext} />
      </div>

      <div className={styles.cards}>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            badgeType={product.badgeType === "New" ? product.badgeType : ""}
            image={product.image}
            colors={product.colors}
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
    </section>
  );
};

export default OurProducts;
