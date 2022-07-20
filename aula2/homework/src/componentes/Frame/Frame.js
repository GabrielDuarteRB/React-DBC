import styles from './Frame.module.css'

const Frame = ({titulo, link}) => {

    return (
        <section className={styles.frame}>
            <h1>{titulo}</h1>
            <iframe src={link} width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </section>
    )
}

export default Frame