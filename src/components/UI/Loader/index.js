import React from "react";
import styles from "./index.module.css";

const Loader = props => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.LdsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
