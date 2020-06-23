import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer/MainContainer.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainContainer} />
    </BrowserRouter>
  );
}

export default App;
