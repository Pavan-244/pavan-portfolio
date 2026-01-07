import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  problem,
  solution,
  outcome,
  tech,
  github,
  live,
}) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3>{title}</h3>

      <div className="project-section">
        <strong>Problem</strong>
        <p>{problem}</p>
      </div>

      <div className="project-section">
        <strong>Solution</strong>
        <p>{solution}</p>
      </div>

      <div className="project-section">
        <strong>Outcome</strong>
        <p>{outcome}</p>
      </div>

      <div className="project-tech">
        <span>Tech:</span> {tech}
      </div>

      <div className="project-actions">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
