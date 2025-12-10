import React, { useState } from "react";
import {
  HeadTitle,
  Title,
  ArrowControls,
  CardCategories,
  Line,
} from "../components";
import { categories } from "../data/categories";
import styles from "./styles.module.css";

const Categories = () => {
  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };
  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className={styles.section}>
      <HeadTitle title="Categories" />
      <div className={styles.flex}>
        <Title title="Browse By Category" />
        <ArrowControls onPrev={handlePrev} onNext={handleNext} />
      </div>

      <div className={styles.categories}>
        {visibleCategories.map((cat) => (
          <CardCategories key={cat.id} name={cat.name} icon={cat.icon} />
        ))}
      </div>
      <Line />
    </section>
  );
};

export default Categories;
