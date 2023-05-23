import React from 'react';
import './globals.css'; 
import styles from './globals.css';

const Layout = ({ user, onLogout, children }) => {
  return (
    <div className={styles.container}>
      <header>
        
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default Layout;