import { HeaderSubtopicos } from '../../components/Header/Header'
import SubPosts from '../../components/SubPosts/SubPosts'
import styles from './Politica.module.css'

const Politica = () =>{

    const categorias = ['JOE BIDEN', '2022 MIDTERM ELECTIONS']

    return(
        <div className={styles.mundo}>
            <HeaderSubtopicos
                titulo='Politics'
            />
            <SubPosts 
                categorias={categorias}
                pagina='Politics'
            />
        </div>
    )
}
export default Politica