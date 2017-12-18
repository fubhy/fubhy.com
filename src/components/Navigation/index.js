import React from 'react';
import Sticky from 'react-stickynode';
import Link from '../Link';
import styles from './index.module.css';

const Navigation = () => (
  <Sticky innerZ={1000}>
    <div className={styles.Wrapper}>
      <Link to="blog" className={styles.Link}>
        Blog
      </Link>
      <Link to="#experience" className={styles.Link}>
        Experience
      </Link>
      <Link to="#education" className={styles.Link}>
        Education
      </Link>
      <Link to="#skills" className={styles.Link}>
        Skills
      </Link>
      <Link to="#testimonials" className={styles.Link}>
        Testimonials
      </Link>
      <Link to="#presentations" className={styles.Link}>
        Presentations
      </Link>
      <Link to="#contact" className={styles.Link}>
        Contact
      </Link>
    </div>
  </Sticky>
);

export default Navigation;
