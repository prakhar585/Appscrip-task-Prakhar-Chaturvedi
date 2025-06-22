import styles from "./SortBar.module.css";
import { useRouter } from "next/router";

export default function SortBar({
  totalItems,
  showFilters,
  toggleFilters,
  selectedSort,
}) {
  const router = useRouter();

  const handleSortChange = (e) => {
    const sortValue = e.target.value;

    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: sortValue },
    });
  };

  return (
    <>
     <hr className={styles.divider} />
      <div className={styles.sortBar}>
        <div className={styles.left}>
          <span className={styles.count}>{totalItems} items</span>
          <span className={styles.toggleBtn}>{showFilters ? "<": ">"}</span>
          <button onClick={toggleFilters} className={styles.filterToggle}>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className={styles.sortControl}>
          <label htmlFor="sortSelect" style={{ display: "none" }}>
            Sort by
          </label>
          <select
            id="sortSelect"
            className={styles.sortSelect}
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option className={styles.filterOptions} value="">Recommended</option>
            <option className={styles.filterOptions} value="newest">Newest First</option>
            <option className={styles.filterOptions} value="popular">Popular</option>
            <option className={styles.filterOptions} value="price_desc">Price: High to Low</option>
            <option className={styles.filterOptions} value="price_asc">Price: Low to High</option>
          </select>
        </div>
      </div>
    </>
  );
}
