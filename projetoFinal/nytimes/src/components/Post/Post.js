import styles from './Post.module.css'

const Post = ({titulo, conteudo, urlImagem, altura, largura}) => {
  return (
    <div className={styles.post}>
        <div>
            <h3>{titulo}</h3>
            <small>{conteudo}</small>
        </div>
        <img style={{width: largura, height: altura}} src={urlImagem}/>
    </div>
  )
}

const PostDeitado = ({titulo, conteudo}) => {
    return (
      <div>
            <h3>{titulo}</h3>
            <small>{conteudo}</small>
      </div>
    )
  }

export {Post, PostDeitado}