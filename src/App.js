import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";

const App = () => {
  return (
    <div>
      <Row genre="Drama" />
      <Row genre="Action" />
      <Row genre="Comedy" />
      <Row genre="Crime" />
    </div>
  );
};
export default App;
