import { useState } from "react";
import { RiArrowRightSLine, RiArrowUpSLine } from "@remixicon/react";
import styles from "./Hero.module.css";

const CategoryItem = ({ category }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = category.children && category.children.length > 0;

  return (
    <li className={styles.item}>
      <div className={styles.row} onClick={() => hasChildren && setOpen(!open)}>
        <span>{category.name}</span>

        {hasChildren && (
          <span className={styles.icon}>{open ? <RiArrowUpSLine /> : <RiArrowRightSLine />}</span>
        )}
      </div>

      {
        hasChildren && open && (
            <ul className={styles.children}>
                {category.children.map(child=>(
                    <CategoryItem key={child.id} category={child} />
                ))}
            </ul>
        )
      }
    </li>
  );
};

export default CategoryItem;
