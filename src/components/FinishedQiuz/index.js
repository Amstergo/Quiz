import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, i) => {
          const classes = [styles[props.results[quizItem.id]], styles.svg];

          return (
            <li key={i}>
              <strong>{i + 1}</strong>
              <span className={styles.QuestionName}>{quizItem.question}</span>
              &nbsp;
              <FontAwesomeIcon
                icon={[
                  "fas",
                  props.results[quizItem.id] === "error" ? "times" : "check"
                ]}
                className={classes.join(" ")}
              />
            </li>
          );
        })}
        {/*<li>
          <strong>1. </strong>
          How are you
          <FontAwesomeIcon
            icon={["fas", "times"]}
            className={[styles.error, styles.svg].join(" ")}
          />
        </li>
        <li>
          <strong>1. </strong>
          How are you
          <FontAwesomeIcon
            icon={["fas", "check"]}
            className={[styles.svg, styles.success].join(" ")}
          />
        </li>*/}
      </ul>

      <p>
        Верно {successCount} из {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry}>Повторить</Button>
        <Link to="/">
          <Button onClick={props.onRetry}>К списку</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
