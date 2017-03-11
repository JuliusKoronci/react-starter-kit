// @flow
import React, {PropTypes, Component} from 'react';
import styles from '../../scss/App.css';
// components
import Navbar from '../Navbar';
import Sidebar from '../../containers/Sidebar';

class ThemeProvider extends Component {
    
    static displayName = 'ThemeProvider';
    
    static propTypes = {
        children: PropTypes.node.isRequired
    };
    
    state = {};
    
    render() {
        return (
            <div id="pageContent" className={styles.pageContent}>
                <Navbar />
                <section className={styles.flexDisplay}>
                    <Sidebar />
                    <main className={styles.mainContent}>
                        {this.props.children}
                    </main>
                </section>
            </div>
        );
    }
}

export default ThemeProvider;