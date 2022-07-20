import styles from "./Paragrafos.module.css"

const Paragrafos = ({texto1, texto2}) => {
    return (
        <section className={styles.paragrafo}>
            <p>{texto1}</p>
            <p>{texto2}</p>
        </section>

    )
}

const ParagrafosInvertidos = ({texto1, texto2}) => {
    return (
        <section className={styles.invertido}>
            <p>{texto1}</p>
            <p>{texto2}</p>
        </section>

    )
}

export {ParagrafosInvertidos, Paragrafos}