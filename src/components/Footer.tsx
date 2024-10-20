import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Adjust the path to your styles folder
import '@fortawesome/fontawesome-free/css/all.css';


// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <Link href="/">MyPortfolio</Link>
//         </div>
//         <ul className={styles.navLinks}>
//           <li><Link href="#home">Home</Link></li>
//           <li><Link href="#about">About</Link></li>
//           <li><Link href="#projects">Projects</Link></li>
//           <li><Link href="#contact">Contact</Link></li>
//         </ul>
//         <div className={styles.socialIcons}>
//           <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-twitter"></i></a>
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-linkedin-in"></i></a>
//           <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-github"></i></a>
//         </div>
//       </div>
//       <div className={styles.copyright}>
//         © {new Date().getFullYear()} MyPortfolio. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
          <a href="" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
          <a href="" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-twitter"></i></a>
          <a href="www.linkedin.com/in/muhammad-ikram-alam-4157b7243" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Ikram-Alam?tab=repositories" target="_blank" rel="noreferrer" className={styles.icon}><i className="fab fa-github"></i></a>
      </div>
      {/* <div className={styles.logo}>
        <Link href="/Home">MyPortfolio</Link>
      </div> */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Ikram Alam. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

