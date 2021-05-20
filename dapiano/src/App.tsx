import "./App.css";
import Piano from "./Components/Piano/Piano";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Piano />
      <hr className="divider"></hr>
      <Footer />
    </div>
  );
}

export default App;
