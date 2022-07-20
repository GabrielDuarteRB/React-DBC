import Navbar from '../Header/Navbar.js'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.lista}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <address>Av. Andaraí 531. Porto Alegre</address>
        </footer>
    )
}

export default Footer