import React from "react";
import styles from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQiuz";

class Quiz extends React.Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question:
          "Какой оператор из этих выполняет не только математические операции?",
        rightAnswer: 3,
        answers: [
          {
            text: "*",
            id: 1
          },
          {
            text: "/",
            id: 2
          },
          {
            text: "+",
            id: 3
          },
          {
            text: "-",
            id: 4
          },
          {
            text: ">>>",
            id: 5
          }
        ]
      },
      {
        id: 2,
        question: "Что выведет этот код?",
        bodyQuestion: `let obj = {
 "0": 1,
  0: 2
};

alert( obj["0"] + obj[0] );`,
        rightAnswer: 3,
        answers: [
          {
            text: "2",
            id: 1
          },
          {
            text: "3",
            id: 2
          },
          {
            text: "4",
            id: 3
          },
          {
            text: "12",
            id: 4
          },
          {
            text: "В коде ошибка.",
            id: 5
          }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswer === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        results,
        answerState: {
          [answerId]: "success"
        }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        }

        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        });

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        results,
        answerState: {
          [answerId]: "error"
        }
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion === this.state.quiz.length - 1
      ? true
      : false;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    });
  };

  componentDidMount() {
    console.log("Quize ID = ", this.props);
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.Wrapper}>
          <h1 className={styles.Title}>Пройдите викторину</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              bodyQuestion={
                this.state.quiz[this.state.activeQuestion].bodyQuestion
              }
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
