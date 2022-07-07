import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

interface ContactButtom {
    hasBackground?: boolean;
}

export function Navbar({ hasBackground=true }: ContactButtom) {
  return (
    <nav>
      <ul className={styles.linksWrapper}>
        <li>
          <NavLink to="aboutUs">About Us</NavLink>
        </li>
        <li about="">
          <NavLink to="Products">Products</NavLink>
        </li>
        <li>
          <NavLink to="Careers">Careers</NavLink>
        </li>
        <li className={hasBackground ? styles.contactButtom : undefined}>
          <NavLink to="ContactUs">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
