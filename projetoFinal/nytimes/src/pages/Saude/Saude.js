import { HeaderSubtopicos } from '../../components/Header/Header'
import SubPosts from '../../components/SubPosts/SubPosts'
import styles from './Saude.module.css'

const Saude = () =>{

    const categorias = ['HEALTH POLICY', 'GLOBAL HEALTH', 'THE NEW OLD AGE', 'SCIENCE', 'WELL', 'CORONAVIRUS OUTBREAK']

    return(
        <div className={styles.saude}>
            <HeaderSubtopicos
                titulo='Health'
            />
            <SubPosts 
                categorias={categorias}
                pagina='health'
            />
        </div>
    )
}
export default Saude