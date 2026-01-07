import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>

      <p className="section-intro">
        Selected projects that demonstrate my ability to design, build, and
        deploy real-world applications.
      </p>

      <div className="projects-grid">
        <ProjectCard
          title="Nxt Watch – Video Streaming Platform"
          problem="Users need a modern video platform with authentication, protected routes, and a clean viewing experience."
          solution="Built a YouTube-like application with JWT authentication, protected routes, theming, and responsive UI."
          outcome="Delivered a fully functional streaming platform with improved user experience and secure access control."
          tech="React, JWT Authentication, REST APIs, Styled Components"
          github="https://github.com/Pavan-244/nxt-watch"
          live="https://nxt-watch.netlify.app"
        />

        <ProjectCard
          title="Student Performance Prediction"
          problem="Educational institutions need insights to predict student academic performance early."
          solution="Developed a machine learning model using demographic and academic features to predict student scores."
          outcome="Achieved accurate predictions and provided insights for early academic intervention."
          tech="Python, Pandas, NumPy, Scikit-Learn"
          github="https://github.com/Pavan-244/student-performance-prediction"
        />

        <ProjectCard
          title="Money Manager Application"
          problem="Individuals struggle to track income and expenses consistently."
          solution="Built a personal finance tracker with dynamic balance calculation and transaction history."
          outcome="Enabled users to better manage personal finances with clear insights."
          tech="React, State Management"
          github="https://github.com/Pavan-244/money-manager"
        />
      </div>
    </section>
  );
};

export default Projects;
