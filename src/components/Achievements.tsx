import styles from '../styles/Achievements.module.css';

const Achievements = () => {
  const certificates = [
    {
      title: "Microsoft Certified: AI Fundamentals",
      image: "/AZ.png", // Add your image path
      description: "This certification demonstrates foundational knowledge of AI and its applications."
    },
    {
      title: "IBM Certified: Machine Learning with Python",
      image: "/ML.png", // Add your image path
      description: "This certification showcases proficiency in machine learning techniques and their implementation in Python."
    },
    {
      title: "IBM Certified: Python for Data Science and AI",
      image: "/DS.png", // Add your image path
      description: "This certification validates skills in Python programming and data science methodologies."
    },
    {
      title: "Google Certified: Foundations of Data",
      image: "/Capture.PNG", // Add your image path
      description: "This certification demonstrates understanding of data analytics and foundational concepts."
    }
  ];

  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <h2 className={styles.achievementsHeading}>My Achievements</h2>
        <div className={styles.achievementsGrid}>
          {certificates.map((cert, index) => (
            <div key={index} className={styles.achievementCard}>
              <img src={cert.image} alt={cert.title} className={styles.certificateImage} />
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
              <p className={styles.certificateDescription}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
