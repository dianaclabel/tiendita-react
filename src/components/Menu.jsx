import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className="menu">
      <ul className={styles.menuList}>
        <li className={styles.listItem}>Home</li>
        <li className={styles.listItem}>Productos</li>
        <li className={styles.listItem}>Carrito</li>
      </ul>
    </div>
  );
};
