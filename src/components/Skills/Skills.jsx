import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "JavaScript", "HTML", "CSS"],
  Data: ["Python", "Pandas", "NumPy", "SQL"],
  Visualization: ["Power BI", "Tableau"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const Skills = () => {
  return (
    <section className="container">
      <h2>Skills</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([title, items]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="skill-card"
          >
            <h3>{title}</h3>
            <p>{items.join(", ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
