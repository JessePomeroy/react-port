import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/about";
import BlackRabbit from "./components/blackrabbit";
import { Carousel } from "./components/carousel/carousel";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App() {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar visible={navVisible} show={showNavbar} />
        <Routes>
          <Route
            path="/react-port"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <AboutMe />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Carousel />
                <Footer />
              </div>
            }
          />
          <Route
            path="/blackrabbit"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <BlackRabbit />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Contact />
                <div className="carousel-item-text">
                  working on creating a modal on click with form submit to enter
                  name and email with an autoresponder
                </div>
                <Footer />
              </div>
            }
          />
          {/* <Route
            path="/react-port"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <AboutMe />
              </div>
            }
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
