import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "/src/data/categories.js";
import {Line} from "..";
import styles from "./Hero.module.css";

const CategoriesSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
      <Line width="1px" thickness="100%" margin="0" />
    </aside>
  );
};

export default CategoriesSidebar;
