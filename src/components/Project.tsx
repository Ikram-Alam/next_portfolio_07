import styles from '../styles/Project.module.css'; // Adjust path to your CSS file

const projects = [
  {
    title: 'Movie Recommendations System',
    description: 'This movie recommendation system leverages a Support Vector Machine (SVM) machine learning model to provide personalized movie suggestions. Deployed as a user-friendly Streamlit app, it ensures efficient recommendations based on user preferences.',
    link: 'https://example.com',
    video: '/movie.mp4', // Image file path
    type: 'video', // 'image' or 'video'
  },
  {
    title: 'GYM-Management Web App',
    description: 'This fully dynamic and responsive web application, developed using Python Django, provides a seamless platform for managing gym operations, member information, and more, ensuring an efficient and user-friendly experience.',
    link: 'https://github.com/Ikram-Alam/Gym-websites',
    video: '/gyms.mp4', // Video file path
    type: 'video',
  },
  {
    title: 'E-commerce Store',
    description: 'This fully dynamic e-commerce shopping store, built with a robust database and an intuitive admin panel, offers seamless product management, user-friendly shopping experiences, and efficient order processing, ensuring a comprehensive solution for online retail.',
    link: 'https://github.com/Ikram-Alam/Royal-Store-web-app',
    image: '/project1.PNG',
    type: 'image',
  },
  // Add more projects here
];

const Project = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.type === 'image' ? (
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              ) : (
                <video className={styles.projectVideo} controls>
                  <source src={project.video} type="video/mp4" />
                </video>
              )}
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
