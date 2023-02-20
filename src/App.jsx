import styles from "./App.module.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
