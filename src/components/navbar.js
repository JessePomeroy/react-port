import {
  FaAngleLeft,
  FaAngleRight,
  FaBars,
  FaGithubAlt,
  FaHome,
  FaReadme,
  FaTerminal,
  FaTree,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
// import { Container } from './container';

const ICON_SIZE = 20;

// const triggerText = 'Contact';
// const onSubmit = (e) => {
//     e.preventDefault(e);
//     console.log(e.target.name.value);
//     console.log(e.target.email.value);
// };

// eventually plan to implement this modal and have it work with an auto-responder

function Navbar({ visible, show }) {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
          <NavLink className="logo" to="https://github.com/jessepomeroy">
            <img src={require("../assets/images/logo.png")} alt="logo" />
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/projects" className="nav-link">
              <FaReadme size={ICON_SIZE} />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/blackrabbit" className="nav-link">
              <FaTree size={ICON_SIZE} />
              <span>Black Rabbit</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/react-port" className="nav-link">
            <FaHome size={ICON_SIZE} />
            <span>Home</span>
          </NavLink>
          <NavLink to="https://github.com/jessepomeroy" className="nav-link">
            <FaGithubAlt size={ICON_SIZE} />
            <span>Github</span>
          </NavLink>
          <div>
            <NavLink to="/contact" className="nav-link">
              <FaTerminal size={ICON_SIZE} />
              <span>Contact</span>
              {/* <Container triggerText={triggerText} onSubmit={onSubmit} /> */}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
