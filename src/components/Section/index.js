import React from 'react';
import styles from './index.module.css';

const Section = ({ children, title, id }) => (
  <section className={styles.Section} id={id}>
    <h2 className={styles.SectionTitle}>{title}</h2>
    {children}
  </section>
);

export default Section;
