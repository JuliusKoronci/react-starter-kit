import React, { PropTypes } from 'react';
import { Navbar, Sidebar } from '../modules';
import GlobalStyles from '../assets';

const SecuredLayout = ({ children }) => (
  <div id="pageContent" className={GlobalStyles.pageContent}>
    <Navbar />
    <section className={GlobalStyles.flexDisplay}>
        <Sidebar />
        <main className={GlobalStyles.mainContent}>
          {this.props.children}
        </main>
    </section>
  </div>
);

SecuredLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecuredLayout;
