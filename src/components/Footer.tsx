// src/components/Footer.tsx

// src/components/Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p className={styles.footerAddress}>
            <a href="https://www.google.com/maps/search/?api=1&query=150+California+St,+Suite+207,+Newton,+MA+02458" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              150 California St, Suite 207
              <br />
              Newton, MA 02458
            </a>
          </p>
          <p className={styles.footerContact}>
            Email: <a href="mailto:laurengarner18@gmail.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">laurengarner18@gmail.com</a>
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
        <div className={styles.footerRight}>
          <a href="https://www.instagram.com/laudidmyhair/" className={styles.footerLink} target="_blank" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} bounce size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



