import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Login from "./pages/Login";
import User from "./pages/User";

const App = () => {

    return (
        <div className="wrap">
            <Navbar />
            <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/User" element={<User />} />
                </Routes>
        </div>
    );
};

export default App;