import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Details } from "./components/Details/Details"
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <MainContent />
      <Details />
      <TrustedBy />
    </div>
  );
}

export default App;
