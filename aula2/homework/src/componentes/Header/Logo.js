import {ImagemLogo} from "../Imagem/Imagem";
import cogumelo from "../../img/cogumelo.png"

const Logo = () => {
    return (
        <>
            <ImagemLogo imagem={cogumelo} altImagem='Cogumelo Mario'/>
            <p>Melhores alunos do Vem Ser de todos os tempos</p>
        </>
    )

}

export default Logo