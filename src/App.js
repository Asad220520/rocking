import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
