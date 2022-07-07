import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'
import { Navbar } from '../NavBar/Navbar'

export function Header(){
    return(
        <header className={styles.wrapper}>
            <img src={Logo} alt="Logo" />
            <Navbar />
        </header>
    )
}