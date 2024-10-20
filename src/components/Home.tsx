import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Adjust the path to your styles folder

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Hi, I'm <span className={styles.highlight}>Muhammad Ikram Alam</span></h1>
          <p>
            I’m a passionate <span className={styles.highlight}>AI Software Engineer</span> and <span className={styles.highlight}>Full Stack Developer</span> building modern web experiences.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/Project" className={styles.cta}>View Projects</Link>
            <Link href="#contact" className={styles.ctaOutline}>Contact Me</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/1.jpg" alt="Developer at work" />
        </div>
      </section>

      {/* Other sections can go here, e.g. About, Projects, Contact */}
    </div>
  );
};

export default HomePage;
