import React from "react";
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
