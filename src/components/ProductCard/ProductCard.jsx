import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  console.log(product);

  function truncateText(text, maxLength = 40) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}


  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div>
        <h3 className={styles.title}>{truncateText(product.title)}</h3>
        <div className={styles.price}> <p>${product.price}</p></div>
      </div>
    </div>
  );
}
