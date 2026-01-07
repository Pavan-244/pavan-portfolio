import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <motion.div
        className="footer-inner container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Heading */}
        <h2>Get in Touch</h2>

        {/* Description */}
        <p className="footer-text">
          I’m always open to discussing new opportunities, projects, or
          collaborations.
        </p>

        {/* Email */}
        <p className="footer-email">
          <a href="mailto:pavankumarbushigampala@gmail.com">
            pavankumarbushigampala@gmail.com
          </a>
        </p>

        {/* Social links */}
        <div className="footer-socials">
          <a
            href="https://github.com/Pavan-244"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/Pavan244"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer bottom */}
        <small className="footer-copy">
          © {new Date().getFullYear()} Pavan Kumar. Built with React.
        </small>
      </motion.div>
    </footer>
  );
};

export default Footer;
