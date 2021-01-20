import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Graphs from "./pages/graphs";
import Processors from "./pages/processors";
import Cursor from "./components/cursor/cursorComponent";
import "./css/style.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Cursor />
        <Route path="/graphs" component={Graphs} />
        <Route path="/processors" component={Processors} />
        <Route
          path="/twitter"
          render={() =>
            (window.location = "https://twitter.com/observatorioCPU/")
          }
        />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
