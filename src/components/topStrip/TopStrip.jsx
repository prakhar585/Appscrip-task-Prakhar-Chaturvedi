
import React from 'react';
import styles from './TopStrip.module.css';

const TopStrip = () => {
  return (
    <div className={styles.topStrip}>
      <div className={styles.content}>
        <span className={styles.text}>
          Lorem ipsum dolor
        </span>
      </div>
    </div>
  );
};

export default TopStrip;