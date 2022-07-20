import styles from "./Header.module.css"

const Navbar = ({conteudo1, conteudo2, conteudo3, estilo}) => {

    return(
        <ul className={styles.listaDeitada}>
            <li><a href="#">{conteudo1}</a></li>
            <li><a href="#">{conteudo2}</a></li>
            <li><a href="#">{conteudo3}</a></li>
        </ul>
    )
}

export default Navbar;