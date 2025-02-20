// components/ProjectsList.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsList.module.css';

const ProjectsList = ({ projects }) => {
  return (
    <main className={styles.container}>
      {/* En-tête de la liste */}
      <header className={styles.header}>
        <h1 className={styles.title}>Projects List</h1>
        <div className={styles.controls}>
          <span className={styles.resultsCount}>{projects.length} results</span>
          <select className={styles.sortSelect}>
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </header>

      {/* Grille des projets */}
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.cardHeader}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div className={styles.metaInfo}>
                <span className={styles.location}>{project.location}</span>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.postedDate}>{project.postedDate}</span>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.proposals}>{project.proposalsCount} Proposals</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.skills}>
                {project.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>

            <footer className={styles.cardFooter}>
              <div className={styles.priceSection}>
                <span className={styles.price}>{project.priceRange}</span>
                <span className={styles.rateType}>{project.rateType}</span>
              </div>
              <motion.button
                className={styles.proposalButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Proposal
              </motion.button>
            </footer>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default ProjectsList;