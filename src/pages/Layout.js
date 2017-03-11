import React, { PropTypes } from 'react';
import { Navbar } from '../modules';
import GlobalStyles from '../assets';

const Layout = ({ children }) => (
  <div id="pageContent" className={GlobalStyles.pageContent}>
    <Navbar />
    <section className={GlobalStyles.flexDisplay}>
        {children}
    </section>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
