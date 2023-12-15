import React from "react";
import "./reset.css";
import "./App.css";
import Form from "./components/Form";
import Heading from "./components/Headling";
import Link from "./components/Link";


function App() {
  return (
    <div className="container">
      <Heading />
      <Form />
      <span className="span"></span>
      <Link link="#" textLink="Войти" />
    </div>
  );
}

export default App;