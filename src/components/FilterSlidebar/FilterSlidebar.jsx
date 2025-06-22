import React from 'react';
import styles from './FilterSlidebar.module.css';
import FilterTab from '../FilterTab/FilerTab';

const FilterSidebar = ({ selectedCategory }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.checkbox}>
     <input type="checkbox" /> <h5>CUSTOMIZABLE</h5>
      </div>
      <FilterTab
        title="IDEAL FOR"
        options={['All', 'Men', 'Women', 'Baby & kids']}
      />

      <FilterTab
        title="Brand"
        options={['Nike', 'Adidas', 'Puma', 'Reebok']}
      />

      <FilterTab
        title="Color"
        options={['Black', 'White', 'Blue', 'Green']}
      />
    </aside>
  );
};

export default FilterSidebar;
