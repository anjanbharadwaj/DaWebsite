import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Piano from "./Components/Piano/Piano";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import DaBaby from "dababy_cursor.jpeg";
function App() {
  // return <Piano />;
  return (
    <div className="App">
      <Header />
      <Piano />
      <Footer />
    </div>
  );
}

export default App;
