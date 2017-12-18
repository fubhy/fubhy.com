import React from 'react';
import Helmet from 'react-helmet';
import styles from './index.module.css';

const EducationItem = ({ children, institution, subject, start, end }) => (
  <div className={styles.Wrapper}>
    <h3 className={styles.Institution}>{institution}</h3>
    <div className={styles.Subject}>{subject}</div>
    <div className={styles.TimeFrame}>
      {start} - {end}
    </div>
    <div className={styles.Description}>{children}</div>
  </div>
);

export default EducationItem;
