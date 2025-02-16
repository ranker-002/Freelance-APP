// components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <span className={styles.logoAccent}>Free</span>io
        </div>
        
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search projects..." 
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
            </svg>
          </button>
        </div>

        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Dashboard</a>
          <a href="#" className={styles.navLink}>Projects</a>
          <a href="#" className={styles.navLinkActive}>New Project</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar