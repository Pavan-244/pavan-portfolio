import { useContext } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <motion.nav
        className="nav-inner"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo / Name */}
        <div className="logo">
          <a href="#top">PAVAN</a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

          {/* Theme Toggle */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
