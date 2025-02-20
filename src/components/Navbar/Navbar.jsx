// components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <div className={styles.logo}>
          Freeio
        </div>

        {/* Bouton menu burger (visible sur mobile) */}
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Contenu du menu */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <div className={styles.searchWrapper}>
            <input type="text" placeholder="Search projects..." className={styles.searchInput} />
          </div>

          <div className={styles.navActions}>
            <motion.button 
              className={styles.newProjectButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              + New Project
            </motion.button>
            <div className={styles.userAvatar}>JD</div>
          </div>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
