import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const [button, setButton] = useState<boolean>(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleResize = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        // Call handleResize initially to set the correct state of the button
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Return a cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        {/* <img src="../public/images/laudidmyhair.jpg" /> */}
                        {/* LDMH <FontAwesomeIcon icon={faTypo3} /> */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* set the hamburger menu */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;


