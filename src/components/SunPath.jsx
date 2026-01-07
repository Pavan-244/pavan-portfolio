import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SunPath = () => {
  const { theme } = useContext(ThemeContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (theme !== "light") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress = Math.min(scrollTop / docHeight, 1);
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  if (theme !== "light") return null;

  /* ===== ARC MATH ===== */
  const radius = 120; // height of arc
  const baseBottom = window.innerHeight - 80; // bottom alignment

  const x = progress * (window.innerWidth - 40);
  const y = baseBottom - radius * Math.sin(Math.PI * progress); // bottom arc

  return (
    <div
      className="sun-path"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className="sun-core" />
    </div>
  );
};

export default SunPath;
