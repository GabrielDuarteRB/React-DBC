import { HeaderSubtopicos } from '../../components/Header/Header'
import SubPosts from '../../components/SubPosts/SubPosts'

const Saude = () =>{

    const categorias = ['HEALTH POLICY', 'GLOBAL HEALTH', 'THE NEW OLD AGE', 'SCIENCE', 'WELL', 'CORONAVIRUS OUTBREAK']

    return(
        <div>
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