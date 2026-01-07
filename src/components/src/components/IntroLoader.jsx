import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const panels = Array.from({ length: 6 });

const IntroLoader = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Center Text */}
          <motion.h1
            className="intro-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            PAVAN
          </motion.h1>

          {/* Curtain Panels */}
          <div className="panels">
            {panels.map((_, i) => (
              <motion.div
                key={i}
                className="panel"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                  delay: 0.6 + i * 0.08,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
