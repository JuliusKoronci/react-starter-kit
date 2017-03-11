// @flow
import React, { PropTypes } from 'react';
import { Logo } from '../../../../components';
import LogoImage from '../../images/logo-small.png';
import styles from '../../scss/navbar.css';

const Navbar = () => (
  <header className={styles.navBar}>
      <Logo className={styles.logo} image={LogoImage} text="WIXI" showText />
      <nav className={styles.mainNavigation}>
          <a className={styles.navigationButton}>Login</a>
          <a className={styles.navigationButton}>Register</a>
      </nav>
  </header>
);

Navbar.displayName  = 'Navbar';
Navbar.propTypes    = {};
Navbar.defaultProps = {};

export default Navbar;
