import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, ProductGallery, ProductInfo } from "../components";
import { fetchProductById } from "../api/productApi";
import mapApiProductToUI from "../utils/mapProduct";
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
      setLoading(true);
      setError(null);
      try {
        const mockProduct = mockProducts.find((p) => String(p.id) === String(id));
        let finalProduct = null;
        if (mockProduct) {
          finalProduct = mockProduct;
        } else {
          const apiProduct = await fetchProductById(id);
          finalProduct = mapApiProductToUI(apiProduct);
        }
        setProduct(finalProduct);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  useEffect(() => {
    if (product?.colors?.length > 0) {
      setActiveColor(product.colors[0].key);
    }else {
      setActiveColor(null);
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
