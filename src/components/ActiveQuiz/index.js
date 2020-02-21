import React from "react";
import styles from "./index.module.css";
import AnswersList from "./AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>{props.answerNumber}&nbsp;</strong>
          {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>

      {props.bodyQuestion !== undefined ? (
        <>
          <hr style={{ borderColor: "#ffffff21" }} />
          <div className={styles.Body}>{props.bodyQuestion}</div>
        </>
      ) : null}

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};
export default ActiveQuiz;
