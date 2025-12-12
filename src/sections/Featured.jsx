import React from "react";
import { HeadTitle, Title, CardArrival } from "../components";
import { features } from "../data/featuresData";
import styles from "./styles.module.css";

const Featured = () => {
  const largeItem = features.find((feature) => feature.size === "large");
  const others = features.filter((feature) => feature.size !== "large");
  const topOne = others[0];
  const bottomTow = others.slice(1, 3);
  console.log(bottomTow);
  

  return (
    <section className={styles.section}>
      <HeadTitle title="Featured" />
      <Title title="New Arrival" />

      <div className={styles.grid}>
        {/* Left large */}
        {largeItem && (
          <div className={`${styles.cardWrapper}`}>
            <CardArrival
              key={largeItem.id}
              title={largeItem.title}
              description={largeItem.desc}
              image={largeItem.image}
              size="large"
            />
          </div>
        )}

        {/* Right column: top row (two items) */}
        <div className={`${styles.cardWrapper} ${styles.right}`}>
          {/* Right bottom: single item */}
          {topOne && (
            <div>
              <CardArrival
                key={topOne.id}
                title={topOne.title}
                description={topOne.desc}
                image={topOne.image}
                size={topOne.size}
              />
            </div>
          )}

          <div className={styles.rightTop}>
            {bottomTow.map((item) => (
              <CardArrival
                key={item.id}
                title={item.title}
                description={item.desc}
                image={item.image}
                size={item.size}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
