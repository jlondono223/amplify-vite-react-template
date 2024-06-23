import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css';
import './HomeBanner.module.css';

const homeBanner: React.FC = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className='home-container'>
            {/* <div className='video-background'>
                <video src='/videos/blonde-hair-1.mp4' autoPlay loop muted />
            </div> */}

            <h1>laudidmyhair</h1>
            <p>Life is more beautiful when you meet the right hairdresser</p>

            <div className='home-btns'>
                <button
                    className='btn btn--outline btn--large'
                    onClick={() => setOpen(true)}
                >
                    Book Now!
                </button>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="popup-content">
                    <button className="close" onClick={closeModal}>&times;</button>
                    <div>
                        <p>Please DM, Call, Text, or Email to book:</p>
                        <ul className="contact-list">
                            <li><a href="https://www.instagram.com/laudidmyhair/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="tel:+6035125646">Call/Text: (603) 512-5646</a></li>
                            <li><a href="mailto:laurengarner18@gmail.com" target="_blank" rel="noopener noreferrer">laurengarner18@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default homeBanner;