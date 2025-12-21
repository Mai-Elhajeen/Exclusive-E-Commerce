import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, ProductGallery, ProductInfo } from "../components";
import { fetchProductById } from "../api/productApi";
import { mapApiProductToUI } from "../utils";
import styles from "./styles.module.css";

const PDPDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((res) => {
      setProduct(mapApiProductToUI(res));
    });
  }, [id]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const apiProduct = await fetchProductById(id);
        const mapped = mapApiProductToUI(apiProduct);
        setProduct(mapped);
      } catch (err) {
        setError("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return null;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.wrapperPDP}>
      <Breadcrumbs product={product} />
      <div className={styles.layoutPDP}>
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
};

export default PDPDetails;
