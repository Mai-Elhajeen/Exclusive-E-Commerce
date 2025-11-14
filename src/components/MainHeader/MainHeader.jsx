import React, { useState } from "react";
import { RiMenuLine } from "@remixicon/react";
import NavLinks from "./NavLinks";
import IconsRight from "./IconsRight";
import styles from "./MainHeader.module.css";

const MainHeader = ({
  showSearch = true,
  showFavorite = true,
  showCart = true,
  showUser = true,
  countFavorite = 0,
  countCart = 3,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Exclusive</div>
      <span className={styles.menuIcon} onClick={() => setOpenMenu(!openMenu)}>
        <RiMenuLine />
      </span>
      <div className={`${styles.navWrapper} ${openMenu ? styles.show : ""}`}>
        <NavLinks />
      </div>
      <IconsRight
        showSearch={showSearch}
        showFavorite={showFavorite}
        showCart={showCart}
        showUser={showUser}
        countFavorite={countFavorite}
        countCart={countCart}
      />
    </header>
  );
};

export default MainHeader;
