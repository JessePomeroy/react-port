import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import "./style/index.css";

function App() {
    const [navVisible, showNavbar] = useState(false);

    return (
        <BrowserRouter >
            <div className="App">
                <Navbar visible={navVisible} show={showNavbar} />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path='/socials' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1>Socials</h1>
                        </div>
                    } />
                    <Route path='/blackrabbit' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1>Black Rabbit</h1>
                        </div>
                    } />
                    <Route path='/github' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1>Github</h1>
                        </div>
                    } />
                    <Route path='/projects' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1>Projects</h1>
                        </div>
                    } />
                    <Route path='/contact' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1>Contact</h1>
                        </div>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;