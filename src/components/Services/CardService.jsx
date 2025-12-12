import React from "react";
import { services } from "../../data/services";
import styles from "./Services.module.css";

const CardService = () => {
  return (
    <div className={styles.wrapper}>
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div key={service.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <span><Icon size={40} /></span> 
            </div>

            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.desc}>{service.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardService;
