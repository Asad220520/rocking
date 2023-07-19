import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import StudLogin from "./components/student/StudLogin";
import RepLogin from "./components/repititor/RepLogin";
import StudRegistr from "./components/student/StudRegistr";
import RepRegistr from "./components/repititor/RepRegistr";
import ForgatPassRep from "./components/repititor/ForgatPassRep";
import ForgatPassStud from "./components/student/ForgatPassStud";
import RepProfile from "./components/repititor/RepProfile";

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
          <Route path="/repRegistr" element={<RepRegistr />} />
          <Route path="/forgatPassRep" element={<ForgatPassRep />} />
          <Route path="/forgatPassStud" element={<ForgatPassStud />} />
          <Route path="/repProfile" element={<RepProfile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
