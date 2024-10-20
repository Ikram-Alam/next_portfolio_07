import styles from '../styles/About.module.css'; // Adjust the path to your styles folder

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textSection}>
            <p>
              Hi! I'm <span className={styles.highlight}>Muhammad Ikram Alam</span>, a passionate <span className={styles.highlight}>AI Software Engineer</span> and <span className={styles.highlight}>Full Stack Developer</span> with a strong background in web development, machine learning, and artificial intelligence. I love creating innovative and scalable solutions that solve real-world problems. My expertise includes building modern, responsive web applications and designing efficient AI models for various applications.
            </p>
            <p>
              I have a deep understanding of technologies such as <span className={styles.highlight}>JavaScript</span>, <span className={styles.highlight}>Python</span>, <span className={styles.highlight}>TypeScript</span>, <span className={styles.highlight}>Next.js</span>, <span className={styles.highlight}>React</span>, and more. In addition to web development, I specialize in areas like natural language processing, computer vision, and machine learning.
            </p>
            <p>
              I'm currently pursuing a bachelor's degree in Software Engineering at UIT
              University, where I'm honing my skills further while working on real-world projects 
              as a freelancer. Whether it's building web applications or developing AI-powered solutions,
              I enjoy every part of the journey.
            </p>
          </div>
          <div className={styles.skillsSection}>
            <h3>Skills & Expertise</h3>
            <ul className={styles.skillsList}>
              <li>Python Programming (with Multiple libraries and framework)</li>
              <li>Full Stack Web Development (Next.js, React, Node.js)</li>
              <li>AI & Machine Learning (Python, TensorFlow, Keras)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Large Language Model (LLM)</li>
              <li>Computer Vision</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Cloud Services (Firebase, Azure)</li>
              <li>APIs and Backend Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
