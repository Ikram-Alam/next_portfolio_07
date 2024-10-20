import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Adjusted import path
; // Import the CSS file

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/Home">Portfolio</Link>
        {/* <img src="1.jpg" alt="loading" /> */}
      </div>
      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
      <label htmlFor="menuToggle" className={styles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </label>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Project">Projects</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
