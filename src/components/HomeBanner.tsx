import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css';  // Global styles
import styles from '../styles/HomeBanner.module.css';  // Component-specific styles

const HomeBanner: React.FC = () => {
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (
        <div className={styles['home-container']}>
            <div className={styles['image-background']}>
                <img src='/images/ldmh-banner.jpg' alt='Banner' />
            </div>

            <h1>laudidmyhair</h1>
            <p>Life is more beautiful when you meet the right hairdresser</p>

            <div className={styles['home-btns']}>
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
                    <div>
                        <p>Please DM, Call, Text, or Email to book:</p>
                        <ul className={styles['contact-list']}>
                            <li><a href="https://www.instagram.com/laudidmyhair/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="tel:+6035125646">Call/Text: (603) 512-5646</a></li>
                            <li><a href="mailto:laurengarner18@gmail.com" target="_blank" rel="noopener noreferrer">laurengarner18@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default HomeBanner;
