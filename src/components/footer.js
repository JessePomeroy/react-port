import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import '../style/index.css';
const ICON_SIZE = 20;

function Footer() {

    return (
        <footer className="footer">
            <NavLink to="/about" className="home-link">
                <FaHome size={ICON_SIZE} />
                <span>Home</span>
            </NavLink>
        </footer>
    );
}

export default Footer;
