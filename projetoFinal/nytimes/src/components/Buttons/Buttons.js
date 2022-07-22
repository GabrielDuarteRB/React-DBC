import styles from './Buttons.module.css'

const Buttons = ({texto}) =>{
    return(
        <button className={styles.botao}>{texto}</button>
    )
}
export default Buttons