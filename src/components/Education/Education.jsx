import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="container">
      <h2>Education</h2>

      <motion.div
        className="education-list"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* B.Tech */}
        <div className="edu-item">
          <h3>Bachelor of Technology (B.Tech) – Data Science</h3>
          <p className="edu-institute">
            St. Mary’s Group of Institutions, Hyderabad
          </p>
          <p className="edu-duration">2022 – 2025 · Final Year</p>
        </div>

        {/* Diploma */}
        <div className="edu-item">
          <h3>Diploma in Electrical and Electronics Engineering (EEE)</h3>
          <p className="edu-institute">KBR Engineering College, Bhuvanagiri</p>
          <p className="edu-duration">2019 – 2022</p>
        </div>

        {/* School */}
        <div className="edu-item">
          <h3>Secondary School Certificate (SSC)</h3>
          <p className="edu-institute">Telangana State Model School</p>
          <p className="edu-duration">2018 – 2019</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
