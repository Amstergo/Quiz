import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader";

class QuizList extends React.Component {
  state = {
    quizes: [],
    loading: true
  };

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/quizes.json");
      const quizes = [];

      Object.keys(res.data).forEach((key, idx) => {
        quizes.push({
          id: key,
          name: `Test #${idx + 1}`
        });
      });

      this.setState({
        quizes,
        loading: false
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className={styles.QuizeList}>
        <div>
          <h1>Список тестов</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

export default QuizList;
