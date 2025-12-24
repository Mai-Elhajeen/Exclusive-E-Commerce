import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, ProductGallery, ProductInfo } from "../components";
import { fetchProductById } from "../api/productApi";
import { mapApiProductToUI } from "../utils";
import styles from "./styles.module.css";
import { products as mockProducts } from "../data/productsData";

const PDPDetails = ({ isLoggedIn, favoriteItems = [], toggleFavorite }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const apiProduct = await fetchProductById(id);

        // Fallback to mock if API fails
        const mockProduct = mockProducts.find(
          (p) => String(p.id) === String(id)
        );
        const mapped = mapApiProductToUI(apiProduct || mockProduct);
        setProduct(mapped);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  useEffect(() => {
    if (product?.colors?.length) {
      setActiveColor(product.colors[0].key);
    }
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (!product) return null;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.wrapperPDP}>
      <Breadcrumbs product={product} />
      <div className={styles.layoutPDP}>
        <ProductGallery product={product} activeColorKey={activeColor} />
        <ProductInfo
          product={product}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          isLoggedIn={isLoggedIn}
          isFavorite={favoriteItems.includes(product.id)}
          onToggleFavorite={() => toggleFavorite(product.id)}
        />
      </div>
    </section>
  );
};

export default PDPDetails;
