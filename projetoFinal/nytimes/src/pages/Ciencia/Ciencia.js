import { HeaderSubtopicos } from "../../components/Header/Header"
import SubPosts from '../../components/SubPosts/SubPosts'
import styles from './Ciencia.module.css'

const Ciencia = () =>{

    const categorias = ['CLIMATE', 'SPACE & ASTRONOMY', 'HEALTH', 'TRILOBITES', 'MATTER', 'OUT THERE CORONAVIRUS OUTBREAK']   
    
    return(
        <div className={styles.ciencia}>
            <HeaderSubtopicos 
                titulo='Science'
            />
            <SubPosts 
                categorias={categorias}
                pagina='Science'
            /> 

        </div>
    )
}
export default Ciencia