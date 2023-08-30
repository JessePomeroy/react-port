import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./components/about";
import BlackRabbit from "./components/blackrabbit";
import { Carousel } from "./components/carousel";
import Contact from "./components/contact";

import Navbar from "./components/navbar";
import "./style/index.css";

const ICON_SIZE = 20;


function App() {
    const [navVisible, showNavbar] = useState(false);

    return (
        <BrowserRouter >
            <div className="App">
                <Navbar visible={navVisible} show={showNavbar} />
                <Routes>
                    <Route path="/react-port" element={<Navigate to="/about" />} />
                    <Route path='/projects' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <Carousel />
                            <NavLink to="/about" className="home-link">
                                <FaHome size={ICON_SIZE} />
                                <span>Home</span>
                            </NavLink>
                        </div>
                    } />
                    <Route path='/blackrabbit' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <BlackRabbit />
                            <NavLink to="/about" className="home-link">
                                <FaHome size={ICON_SIZE} />
                                <span>Home</span>
                            </NavLink>
                        </div>
                    } />
                    <Route path='/socials' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1 className="name">Socials</h1>
                            <NavLink to="/about" className="home-link">
                                <FaHome size={ICON_SIZE} />
                                <span>Home</span>
                            </NavLink>
                        </div>
                    } />
                    <Route path='/github' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1 className="name">who am i?...</h1>
                            <AboutMe />
                        </div>
                    } />
                    <Route path='/contact' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <Contact />
                            <div className="carousel-item-text">working on creating a modal on click with form submit to enter name and email with an autoresponder</div>
                            <NavLink to="/about" className="home-link">
                                <FaHome size={ICON_SIZE} />
                                <span>Home</span>
                            </NavLink>
                        </div>
                    } />
                    <Route path='/about' element={
                        <div className={!navVisible ? "page" : "page page-with-navbar"}>
                            <h1 className="name">who am i?...</h1>
                            <AboutMe />
                        </div>
                    } />
                </Routes>
            </div >
        </BrowserRouter >
    );
}

export default App;