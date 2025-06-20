import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({products}) => {
  return (
    <div className={styles.grid}>
      {products.map((item, index) => (
            <ProductCard key={index} product={item}></ProductCard>
          ))}
    </div>
  )
}

export default ProductGrid
