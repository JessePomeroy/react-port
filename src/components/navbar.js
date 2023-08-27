import React from 'react';
import {
    FaAngleLeft,
    FaAngleRight,
    FaBars,
    FaGithubAlt,
    FaReadme,
    FaRegUser,
    FaTerminal,
    FaTree
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const ICON_SIZE = 20;

function Navbar({ visible, show }) {

    return (
        <>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                    <FaBars size={24} />
                </button>
            </div>
            <nav className={!visible ? 'navbar' : ''}>
                <button
                    type="button"
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    {!visible
                        ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
                </button>
                <div>
                    <NavLink
                        className="logo"
                        to="https://github.com/jessepomeroy"
                    >
                        <img
                            src={require("../assets/Images/logo.png")}
                            alt="logo"
                        />
                    </NavLink>
                    <div className="links nav-top">
                        <NavLink to="/socials" className="nav-link">
                            <FaRegUser size={ICON_SIZE} />
                            <span>Socials</span>
                        </NavLink>
                        <NavLink to="/blackrabbit" className="nav-link">
                            <FaTree size={ICON_SIZE} />
                            <span>Black Rabbit</span>
                        </NavLink>
                        <NavLink to="/github" className="nav-link">
                            <FaGithubAlt size={ICON_SIZE} />
                            <span>Github</span>
                        </NavLink>
                        <NavLink to="/projects" className="nav-link">
                            <FaReadme size={ICON_SIZE} />
                            <span>Projects</span>
                        </NavLink>
                    </div>
                </div>

                <div className="links">
                    <NavLink to="/contact" className="nav-link">
                        <FaTerminal size={ICON_SIZE} />
                        <span>Contact</span>
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;