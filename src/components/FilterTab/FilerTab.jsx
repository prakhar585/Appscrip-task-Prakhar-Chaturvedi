import React, { useState } from 'react';
import styles from './FilterTab.module.css';

const FilterTab = ({ title, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.filterTab}>
      <div className={styles.tabHeader} onClick={toggleOpen}>
        <h3>{title}</h3>
        <span className={styles.icon}>{isOpen ? '<' : '>'}</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((opt, index) => (
            <label key={index} className={styles.option}>
              <input type="checkbox" />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterTab;
