import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuToggle = props => {
  const classes = [styles.MenuToggle, props.isOpen ? styles.open : null];

  return (
    <FontAwesomeIcon
      className={classes.join(" ")}
      icon={["fas", props.isOpen ? "times" : "bars"]}
      onClick={props.onToggle}
    />
  );
};

export default MenuToggle;
