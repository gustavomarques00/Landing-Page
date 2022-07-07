import styles from "./TrustedBy.module.css";
import Coca from "../../assets/CocaLogo.png";
import Microsoft from "../../assets/MicrosoftLogo.png";
import Twitter from "../../assets/TwitterLogo.png";

export function TrustedBy() {

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainTexts}>
        <h1>Trusted by</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <div className={styles.logos}>
        <img src={Microsoft}/>
        <img src={Twitter}/>
        <img src={Coca}/>
      </div>
    </div>
  );
}

