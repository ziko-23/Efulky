import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          efulky.ma
          <br />
          Coming Soon
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
