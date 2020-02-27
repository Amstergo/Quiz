import React from "react";
import Layout from "./hoc/Layout";
import { Route, Routes } from "react-router-dom";
import Quiz from "./containers/Quiz";
import QuizCreator from "./containers/QuizCreator";
import QuizList from "./containers/QuizList";
import Auth from "./containers/Auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="quiz-creator" element={<QuizCreator />} />
        <Route path="quiz/:id" element={<Quiz />} />
        <Route path="/" element={<QuizList />} />
      </Routes>
    </Layout>
  );
}

export default App;
