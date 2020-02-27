import React from "react";
import styles from "./index.module.css";

const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={styles.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, idx) => {
          return (
            <option value={option.value} key={option.value + idx}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
