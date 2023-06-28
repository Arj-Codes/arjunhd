import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Chargin from "./pages/Chargin";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Fastag from "./pages/Fastag";
import Forms from "./containers/fastag/Forms";
import Replacement from "./containers/fastag/Replacement";
import Validate from "./containers/fastag/Validate";
import Rakshaqr from "./pages/Rakshaqr";
import Modal from "./components/layout/Modal";
// import { useState } from "react";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/modal"
            element={<Modal />}
          />
        </Routes>
        <Header />
        <Routes>
          <Route path="/" element={<Chargin />} />
          <Route path="/chargin" element={<Home />} />
          <Route path="/fastag" element={<Fastag />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/replacement" element={<Replacement />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/rakshaqr" element={<Rakshaqr />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
