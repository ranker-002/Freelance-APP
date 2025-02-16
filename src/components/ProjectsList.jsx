// components/ProjectsList.jsx
import React from 'react';
import styles from './ProjectsList.module.css';

const ProjectsList = ({ projects }) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects List</h1>
        <span className={styles.resultsCount}>Showing {projects.length} results</span>
      </header>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.headerContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <div className={styles.metaData}>
                  <span className={styles.location}>{project.location}</span>
                  <div className={styles.dotDivider} />
                  <time className={styles.postedDate}>{project.postedDate}</time>
                  <div className={styles.dotDivider} />
                  <span className={styles.proposals}>{project.proposalsCount} Proposals</span>
                </div>
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.description}>{project.description}</p>
              {project.skills && (
                <div className={styles.skills}>
                  {project.skills.map((skill, index) => (
                    <span key={index} className={styles.skillPill}>{skill}</span>
                  ))}
                </div>
              )}
            </div>

            <footer className={styles.cardFooter}>
              <div className={styles.priceSection}>
                <span className={styles.price}>{project.priceRange}</span>
                <span className={styles.rateType}>{project.rateType}</span>
              </div>
              <button className={styles.proposalButton}>
                Send Proposal
                <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </button>
            </footer>
          </article>
        ))}
      </div>
    </main>
  );
};

export default ProjectsList