import React from 'react';
import styles from './FilterSlidebar.module.css';
import FilterTab from '../FilterTab/FilerTab';

const FilterSidebar = ({ selectedCategory }) => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.heading}>Filters</h2>

      <FilterTab
        title="Category"
        options={['Shoes', 'T-Shirts', 'Jeans', 'Hoodies']}
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
