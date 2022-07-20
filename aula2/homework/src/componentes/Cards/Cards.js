import {ImagemPrincipal} from "../Imagem/Imagem"
import cogumelo from "../../img/cogumelo.png"
import styles from "./Cards.module.css"

const Cards = (textos) => {

    return (
        <ul className={styles.cards}>
          { textos.texto.map((t) => {
                return(
                    <li className={styles.card}>
                        <ImagemPrincipal imagem={cogumelo}/>
                        <p>{t}</p>
                    </li> 
                )
            })}
        </ul>
    )

}

export default Cards