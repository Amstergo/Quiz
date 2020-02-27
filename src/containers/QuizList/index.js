import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

class QuizList extends React.Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, i) => {
      return (
        <li key={i}>
          <NavLink to={"/quiz/" + quiz}>Test {quiz}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={styles.QuizeList}>
        <div>
          <h1>Список тестов</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
