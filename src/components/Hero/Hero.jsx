import { motion } from "framer-motion";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="top" className="hero container">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        Frontend Engineer with a Data Science background
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        I build scalable, accessible, and data-driven web applications using
        React and modern JavaScript.
      </motion.p>

      <div className="hero-actions">
        <a href="/resume.pdf" download className="btn-primary">
          Download Resume
        </a>

        <button className="btn-secondary" onClick={() => setShowVideo(true)}>
          ▶ Watch 60-sec Introduction
        </button>
      </div>

      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  );
};

export default Hero;
