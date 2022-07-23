import styles from './Post.module.css'

const Post = ({titulo, conteudo, urlImagem, altura, largura, criador}) => {
  return (
    <div className={styles.post}>
        <div>
            <h3>{titulo}</h3>
            <small>{conteudo}</small>
            <p>{criador}</p>
        </div>
        <img style={{width: largura, height: altura}} src={urlImagem}/>
    </div>
  )
}

const PostLateralSubtopicos = ({titulo, conteudo, urlImagem, altura, largura, criador}) => {
  return (
    <div className={styles.postSubtopicos}>
        <div>
            <h3>{titulo}</h3>
            <img style={{width: largura, height: altura}} src={urlImagem}/>
        </div>
        <p>{conteudo}</p>
        <small>{criador}</small>
    </div>
  )
}

const PostDeitado = ({criador, titulo, conteudo}) => {
    return (
      <div>
            <span>{criador}</span>
            <h3>{titulo}</h3>
            <small>{conteudo}</small>
      </div>
    )
}

const PostLatest = ({titulo, conteudo, urlImagem, altura, largura, criador, tempo}) => {
  return (
    <div className={styles.postLatest}>
      <span>{tempo}</span>
      <div>
        <h1>{titulo}</h1>
        <p>{conteudo}</p>
        <small>{criador}</small>
      </div>
      <img style={{width: largura, height: altura}} src={urlImagem}/>
    </div>
  )
}

export {Post, PostDeitado, PostLateralSubtopicos, PostLatest}