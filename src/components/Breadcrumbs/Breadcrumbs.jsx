import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ product }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">Home</Link>

      {pathnames.map((segment, index) => {
        const isLast = index === pathnames.length - 1;

        if (segment === "product") {
          return <span key={index}> / Product</span>;
        }

        if (isLast && product) {
          return <span key={index}> / {product.title}</span>;
        }

        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={index}>
            {" / "}
            <Link to={to}>{decodeURIComponent(segment)}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
