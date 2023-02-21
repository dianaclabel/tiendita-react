import styles from "./Products.module.css";

export const Products = () => {
  return (
    <div className={styles.containerProducts}>
      <h2 className={styles.titleProducts}>Products</h2>
      <div className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className={styles.product}>
      <img
        src="https://via.placeholder.com/200"
        alt=""
        className={styles.productImg}
      />
      <div>
        <p>Tomate</p>
        <p>$3.00</p>
      </div>
      <button>Agregar</button>
    </div>
  );
};
