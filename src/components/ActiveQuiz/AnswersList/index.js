import React from "react";
import styles from "./index.module.css";
import AnswerItem from "./AnswerItem";

const AnswersList = props => {
  console.log(props.state);
  return (
    <ul className={styles.AnswersList}>
      {props.answers.map((answer, i) => {
        return (
          <AnswerItem
            key={i}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};
export default AnswersList;
