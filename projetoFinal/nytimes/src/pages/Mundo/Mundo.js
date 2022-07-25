import { HeaderSubtopicos } from '../../components/Header/Header'
import SubPosts from '../../components/SubPosts/SubPosts'
import styles from './Mundo.module.css'

const Mundo = () =>{

    const categorias = ['AFRICA', 'AMERICAS', 'ASIA', 'AUSTRALIA', 'CANADA', 'EUROPE','MIDDLE EAST']

    return(
        <div className={styles.mundo}>
            <HeaderSubtopicos
                titulo='World News'
            />
            <SubPosts 
                categorias={categorias}
                pagina='world'
            />
        </div>
    )
}
export default Mundo