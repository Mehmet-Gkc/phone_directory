import React from "react";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.phone}>
          <ul className={styles.content}>
            <li></li>
            <li></li>
          </ul>
          <div className={styles.cover}></div>
          <div className={styles.cover}></div>
          <div className={styles.cover}></div>
        </div>
      </div>
    </>
  );
}

export default Home;
