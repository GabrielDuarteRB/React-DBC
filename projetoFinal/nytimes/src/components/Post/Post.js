import { Link, useNavigate  } from 'react-router-dom'
import styles from './Post.module.css'

const Post = ({titulo, conteudo, urlImagem, altura, largura, criador, idElemento, categoria}) => {

  return (
      <div className={styles.post}>
          <Link to={`/Post/${idElemento}/${categoria}`}>
            <div>
                <h3>{titulo}</h3>
                <small>{conteudo}</small>
                <p>{criador}</p>
            </div>
            <img style={{width: largura, height: altura}} src={urlImagem}/>
        </Link>
      </div>
  )
}

const PostLateralSubtopicos = ({titulo, conteudo, urlImagem, altura, largura, criador, idElemento, categoria}) => {
  
  return (

    <div id={idElemento} className={styles.postSubtopicos}>
      <Link to={`/Post/${idElemento}/${categoria}`}>
        <div>
            <h3>{titulo}</h3>
            <img style={{width: largura, height: altura}} src={urlImagem}/>
        </div>
        <p>{conteudo}</p>
        <small>{criador}</small>
      </Link>
    </div>
  )
}

const PostDeitado = ({criador, titulo, conteudo, idElemento, categoria}) => {

  return (
    <div className={styles.postDeitado}>
        <Link to={`/Post/${idElemento}/${categoria}`}>
          <span>{criador}</span>
          <h3>{titulo}</h3>
          <small>{conteudo}</small>
        </Link>
    </div>
  )
}

const PostLatest = ({titulo, conteudo, urlImagem, altura, largura, criador, tempo, idElemento, categoria}) => {

  return (
    <div className={styles.postLatest}>
      <Link to={`/Post/${idElemento}/${categoria}`}>
        <span>{tempo}</span>
        <div>
          <h1>{titulo}</h1>
          <p>{conteudo}</p>
          <small>{criador}</small>
        </div>
        <img style={{width: largura, height: altura}} src={urlImagem}/>
      </Link>
    </div>
  )
}


export {Post, PostDeitado, PostLateralSubtopicos, PostLatest, }