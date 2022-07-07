import { Card } from "../Card/Card";
import Investment from '../../assets/Investment.png'
import styles from "./MainContent.module.css";

export function MainContent() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.depoiments}>
        <div>
          <h1>Lorem ipsum <span>dolor</span> sit amet yo 👋</h1>
        </div>
        <div className={styles.depoimentsWrapper}>
          <Card
            source="https://github.com/gustavomarques00.png"
            name="Gustavo Marques"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
          />
          <Card
            source="https://github.com/akajhon.png"
            name="João Pedro"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
          />
          <Card
            source="https://github.com/Z4nzu.png"
            name="José Pereira"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
          />
        </div>
      </section>
      <section className={styles.image}>
        <img src={Investment} />
      </section>
    </main>
  );
}
