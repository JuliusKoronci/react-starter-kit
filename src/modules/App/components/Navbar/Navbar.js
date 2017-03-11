// @flow
import React, { PropTypes } from 'react';
import styles from '../../scss/App.css';

const Navbar = () => (
  <header className={styles.navBar}>
        <nav>
            <ul className={styles.noMargin}>
                <li>
                    <a href="#">Nav 1 link</a>
                </li>
            </ul>
        </nav>
    </header>
);

Navbar.displayName  = 'Navbar';
Navbar.propTypes    = {};
Navbar.defaultProps = {};

export default Navbar;
