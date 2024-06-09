import styles from "./App.module.css";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { calcularImc } from "./utils/imc";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <Products />
      <Footer />
      <p>Talla 1.60 peso 62</p>
      <p>Imc: {calcularImc(62, 1.6)}</p>
    </div>
  );
}

export default App;
