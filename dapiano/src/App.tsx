import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Piano from "./Components/Piano/Piano";
import Footer from "./Components/Footer/Footer";

function App() {
  // return <Piano />;
  return (
    <div className="App">
      <Piano />
      <Footer />
    </div>
  );
}

export default App;
