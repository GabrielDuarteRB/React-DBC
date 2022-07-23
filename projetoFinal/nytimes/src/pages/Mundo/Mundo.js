import { HeaderSubtopicos } from '../../components/Header/Header'
import SubPosts from '../../components/SubPosts/SubPosts'

const Mundo = () =>{

    const categorias = ['AFRICA', 'AMERICAS', 'ASIA', 'AUSTRALIA', 'CANADA', 'EUROPE','MIDDLE EAST']

    return(
        <div>
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