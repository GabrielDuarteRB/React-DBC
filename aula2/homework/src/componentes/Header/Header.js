import Logo from "./Logo";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {

    return(
        <header className={styles.header}>
            <Logo/>
            <Navbar 
                conteudo1='Home' 
                conteudo2='Sobre' 
                conteudo3='Contato'
            />
        </header>
    )

}

export default Header;