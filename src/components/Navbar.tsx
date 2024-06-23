import React from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar: React.FC = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Auth', href: '/auth' },
    { name: 'Todos', href: '/todos' },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
