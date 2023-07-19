import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import StudLogin from "./components/student/StudLogin";
import RepLogin from "./components/repititor/RepLogin";
import StudRegistr from "./components/student/StudRegistr";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studlogin" element={<StudLogin />} />
          <Route path="/replogin" element={<RepLogin />} />
          <Route path="/studRegistr" element={<StudRegistr />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
