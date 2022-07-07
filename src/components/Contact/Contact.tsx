import styles from "./Contact.module.css";
import Bot from "../../assets/AssistantBot.png";

export function Contact() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.contactImg}>
        <img src={Bot} />
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactText}>
          <h1>Register interest</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>
        </div>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm}>
            <div className={styles.formItem}>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter your name"
                id="name"
                type="text"
                required
                name="name"
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="company">Company</label>
              <input
                placeholder="Enter your company name"
                id="company"
                type="text"
                name="company"
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Enter your email address"
                id="email"
                type="email"
                required
                name="email"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
