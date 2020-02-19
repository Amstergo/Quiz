import React from "react";
import styles from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";

class Quiz extends React.Component {
  state = {
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
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswer === answerId) {
      this.setState({
        answerState: {
          [answerId]: "success"
        }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          return console.log("finish");
        }

        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        });

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
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

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.Wrapper}>
          <h1 className={styles.Title}>Пройдите викторину</h1>
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
        </div>
      </div>
    );
  }
}

export default Quiz;
