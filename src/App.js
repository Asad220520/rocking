import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
