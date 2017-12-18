import React from 'react';
import Helmet from 'react-helmet';
import styles from './index.module.css';

const Page = ({ children, title, transition }) => (
  <div style={transition && transition.style}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1 className={styles.Title}>Home</h1>
    <div className={styles.Body}>{children}</div>
  </div>
);

export default Page;
