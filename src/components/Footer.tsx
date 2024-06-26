import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';
import logo from '/vite.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeader}>Contact Us</h3>
            <p className={styles.footerAddress}>
              <a href="https://www.google.com/maps/search/?api=1&query=150+California+St,+Suite+207,+Newton,+MA+02458" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                150 California St, Suite 207
                <br />
                Newton, MA 02458
              </a>
            </p>
            <p className={styles.footerContact}>
              <a href="mailto:laurengarner18@gmail.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">laurengarner18@gmail.com</a>
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeader}>Follow Us</h3>
            <a href="https://www.instagram.com/laudidmyhair/" className={styles.footerLink} target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} bounce size="2x" />
            </a>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeader}>Policies</h3>
            <a href="/cancellation-policy" className={styles.footerLink}>Cancellation Policy</a>
          </div>
        </div>
      </div>
      <div className={styles.footerLogo}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </footer>
  );
};

export default Footer;

