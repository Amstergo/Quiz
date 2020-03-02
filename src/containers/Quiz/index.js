import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQiuz";
import axios from "../../axios/axios-quiz";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader";

function Quiz(props) {
  const [results, setResults] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answerState, setAnswerState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  /* state = {
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
  }; */

  const onAnswerClickHandler = answerId => {
    if (answerState) {
      const key = Object.keys(answerState)[0];
      if (answerState[key] === "success") {
        return;
      }
    }

    const question = quiz[activeQuestion];
    const res = results;

    if (question.rightAnswerId === answerId) {
      if (!res[question.id]) {
        res[question.id] = "success";
      }

      setResults(res);
      setAnswerState({ [answerId]: "success" });

      /*  this.setState({
        results,
        answerState: {
          [answerId]: "success"
        }
      }); */

      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true);
          // this.setState({
          //   isFinished: true
          // });
        }

        setActiveQuestion(activeQuestion + 1);
        setAnswerState(null);

        // this.setState({
        //   activeQuestion: activeQuestion + 1,
        //   answerState: null
        // });

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      setResults(results);
      setAnswerState({ [answerId]: "error" });
      // this.setState({
      //   results,
      //   answerState: {
      //     [answerId]: "error"
      //   }
      // });
    }
  };

  const isQuizFinished = () => {
    return activeQuestion === quiz.length - 1 ? true : false;
  };

  const retryHandler = () => {
    setActiveQuestion(0);
    setAnswerState(null);
    setIsFinished(false);
    setResults({});

    // this.setState({
    //   activeQuestion: 0,
    //   answerState: null,
    //   isFinished: false,
    //   results: {}
    // });
  };

  const { id } = useParams();
  useEffect(() => {
    (async function fetchQuiz() {
      try {
        const res = await axios.get(`/quizes/${id}.json`);

        setQuiz(res.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    <div className={styles.Quiz}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>Пройдите викторину</h1>

        {loading ? (
          <Loader />
        ) : isFinished ? (
          <FinishedQuiz results={results} quiz={quiz} onRetry={retryHandler} />
        ) : (
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            bodyQuestion={quiz[activeQuestion].bodyQuestion}
            onAnswerClick={onAnswerClickHandler}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
            state={answerState}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
