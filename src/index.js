import React from "react";
import { render } from "react-dom";
import GitHubLogin from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <GitHubLogin />
  </div>
);

render(<App />, document.getElementById("root"));
