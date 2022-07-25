import { HeaderSubtopicos } from "../../components/Header/Header"
import SubPosts from '../../components/SubPosts/SubPosts'
import styles from './Tecnologia.module.css'

const Tecnologia = () =>{

    const categorias = ['DEALBOOK', 'MARKETS', 'ECONOMY', 'ENERGY', 'MEDIA', 'TECHNOLOGY', 'PERSONAL TECH', 'SMALL BUSINESS', 'YOUR MONEY', 'MUTUAL FUNDS & ETFS']   
    
    return(
        <div className={styles.tecnologia}>
            <HeaderSubtopicos 
                titulo='Technology'
            />
            <SubPosts 
                categorias={categorias}
                pagina='Technology'
            /> 

        </div>
    )
}
export default Tecnologia