import React from 'react';
import styles from './index.module.css';

const TimelineItem = ({
  company,
  location,
  occupation,
  start,
  end,
  children,
}) => (
  <div className={styles.Wrapper}>
    <div className={styles.Place}>
      <h3 className={styles.Company}>{company}</h3>
      <div className={styles.Location}>{location}</div>
    </div>
    <div className={styles.Meta}>
      <div className={styles.Occupation}>{occupation}</div>
      <div className={styles.TimeFrame}>
        {start} - {end}
      </div>
    </div>
    <div className={styles.Description}>{children}</div>
  </div>
);

export default TimelineItem;
