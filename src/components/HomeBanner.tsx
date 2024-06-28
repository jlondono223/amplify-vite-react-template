import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import '../App.css';  // Global styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HomeBanner.module.css';

const HomeBanner: React.FC = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const closeModal = () => setOpen(false);

    return (
        <div className={styles['home-container']}>
            <div className={styles['image-background']}>
                <img src='/images/ldmh-banner.jpg' alt='Banner' />
            </div>

            <h1 data-aos="fade-right" data-aos-delay="400">laudidmyhair</h1>
            <p data-aos="fade-left" data-aos-delay="800">Life is more beautiful when you meet the right hairdresser</p>

            <div className={styles['home-btns']} data-aos="fade-up">
                <button
                    className={`${styles.btn} ${styles['btn--outline']} ${styles['btn--large']}`}
                    onClick={() => setOpen(true)}
                >
                    Book Now!
                </button>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className={styles['popup-content']}>
                    <button className={styles.close} onClick={closeModal}>&times;</button>
                    <div className={styles['popup-inner']}>
                        <h2>Contact to book:</h2>
                        <ul className={styles['contact-list']}>
                            <li><a href="https://www.instagram.com/laudidmyhair/" className={styles.footerIcon} target="_blank" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </li>
                            <li>
                                <a href="tel:1234567890" className={styles.footerIcon}>
                                    <FontAwesomeIcon icon={faPhone} size="2x" />
                                </a>
                            </li>
                            <li>
                            <a href="mailto:laurengarner18@gmail.com" className={styles.footerIcon} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default HomeBanner;

