import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Work from "./component/work/Work";
import Error from "./component/error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Login from "./component/login/Login";
import Register from "./component/register/Register";

function App() {
  // const [username, setUsername] = useState(true);
  // const { username } = JSON.parse(localStorage.getItem("user"));
  // console.log(username);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route path="*" element={<Error />} />
          <Route exact path="/sign" element={<Register />} />

          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
