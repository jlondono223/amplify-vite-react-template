import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.css';
import logo from '/vite.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeader}>Contact Us</h3>
            <div className={styles.footerContact}>
              <a href="https://www.instagram.com/laudidmyhair/" className={styles.footerIcon} target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="tel:1234567890" className={styles.footerIcon}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </a>
              <a href="mailto:laurengarner18@gmail.com" className={styles.footerIcon} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
            <h3 className={styles.footerHeader}>Location</h3>
            <p className={styles.footerAddress}>
              <a href="https://www.google.com/maps/search/?api=1&query=150+California+St,+Suite+207,+Newton,+MA+02458" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                150 California St, Suite 207
                Newton, MA 02458
              </a>
            </p>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeader}>Misc</h3>
            <a href="/cancellation-policy" className={styles.footerLink}>Cancellation Policy</a>
            <br />
            <a href="/review" className={styles.footerLink}>Review</a>
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
