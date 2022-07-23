import { HeaderPagePost } from "../../components/Header/Header"
import { Post } from "../../components/Post/Post"

const PagePost = ({facet, titulo, conteudo, urlImagem, altura, largura}) => {
  return (
    <div>
        <HeaderPagePost facet={['gabriel', 'duarte', 'rodrigues', 'bastos']}/>
        <Post 
            titulo={titulo}
            conteudo={conteudo}
            urlImagem={urlImagem}
            altura='478px'
            largura='100%'
        />
    </div>
  )
}
export default PagePost