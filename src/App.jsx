import styles from "./App.module.css";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
