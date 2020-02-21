import React from "react";
import styles from "./index.module.css";

const Backdrop = props => (
  <div className={styles.Backdrop} onClick={props.onClick} />
);

export default Backdrop;
