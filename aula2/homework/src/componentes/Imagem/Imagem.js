import styles from "./Imagem.module.css"

const ImagemLogo = ({imagem, altImagem}) => { 

    return(
        <img className={styles.logo} src={imagem} alt={altImagem} />
    )

}

const ImagemPrincipal = ({imagem, altImagem}) => {

    return (
        <img className={styles.principal} src={imagem} alt={altImagem} />
    )
}

export {ImagemPrincipal, ImagemLogo } ;