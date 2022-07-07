import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Details } from "./components/Details/Details"
import { TrustedBy } from "./components/TrustedBy/TrustedBy"
import { Contact } from "./components/Contact/Contact"
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <MainContent />
      <Details />
      <TrustedBy />
      <Contact />
      <Header />

    </div>
  );
}

export default App;
