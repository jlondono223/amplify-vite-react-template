import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '/laudidmyhair.png';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ''}`}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
    </nav>
  );
};

export default Navbar;

