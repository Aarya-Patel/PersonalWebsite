import React from "react";
import { HashRouter, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer/MainContainer.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={MainContainer} />
    </HashRouter>
  );
}

export default App;
