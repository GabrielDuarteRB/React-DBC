import {Post, PostDeitado} from "../../components/Post/Post"
import styles from './Home.module.css'

const Home = ({api}) => {

    const semUrl = 'data:image/png;base64,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'
    const opnioes = api.filter(a => {
        return a.section === 'opinion'
    })
    console.log(opnioes)
    

  return (
    <section className={styles.home}>
        <div>
            {
                api.slice(0, 2).map((item, index) => (
                        <Post
                            key={index}
                            titulo={item.title}
                            conteudo={item.abstract}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            largura='500px'
                            altura='300px'
                        />
                ))
            }
            <div className={styles.postDeitado}>
                {
                    api.slice(2, 4).map((item, index) => (
                        <PostDeitado 
                        key={index}
                        titulo={item.title}
                        conteudo={item.abstract}
                        />
                    ))
                }
            </div>
            {
                api.slice(4, 7).map((item, index) => (
                        <Post
                            key={index}
                            titulo={item.title}
                            conteudo={item.abstract}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            largura='500px'
                            altura='300px'
                        />
                ))
            }
            <div className={styles.postDeitado}>
                {
                    api.slice(7, 9).map((item, index) => (
                        <PostDeitado 
                        key={index}
                        titulo={item.title}
                        conteudo={item.abstract}
                        />
                    ))
                }
            </div>
            {
                api.slice(9, 12).map((item, index) => (
                        <Post
                            key={index}
                            titulo={item.title}
                            conteudo={item.abstract}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            largura='500px'
                            altura='300px'
                        />
                ))
            }
            <div className={styles.postDeitado}>
                {
                    api.slice(12, 14).map((item, index) => (
                        <PostDeitado 
                        key={index}
                        titulo={item.title}
                        conteudo={item.abstract}
                        />
                    ))
                }
            </div>
            {
                api.slice(14, 16).map((item, index) => (
                        <Post
                            key={index}
                            titulo={item.title}
                            conteudo={item.abstract}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            largura='500px'
                            altura='300px'
                        />
                ))
            }
            <div className={styles.postDeitado}>
                {
                    api.slice(16, 18).map((item, index) => (
                        <PostDeitado 
                        key={index}
                        titulo={item.title}
                        conteudo={item.abstract}
                        />
                    ))
                }
            </div>
            {
                api.slice(18, (api.length - 9)).map((item, index) => (
                        <Post
                            key={index}
                            titulo={item.title}
                            conteudo={item.abstract}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            largura='500px'
                            altura='300px'
                        />
                ))
            }

        </div>
        <aside>
            <div className={styles.postAside}>
                {
                    api.slice((api.length - 9), (api.length - 8)).map((item, index)=>(
                        <Post
                            key={index}
                            urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                            titulo={item.title}
                            conteudo= {item.abstract}
                            largura='100%'
                            altura ='250px'
                        />
                    ))
                }
                <div className={styles.postAsideDuplo}>
                    {
                        api.slice((api.length - 7),(api.length - 5)).map((item, index) =>(
                            <Post
                                key={index}
                                urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                                titulo={item.title}
                                largura='170px'
                                altura ='100px'
                            />
                        ))
                    }
                </div>
            </div>
            
            <div className={styles.opnioes}>
                <h1>Opnion</h1>
            {
                opnioes.map((item, i) =>(
                    <PostDeitado
                        key={i}
                        titulo={item.title}
                        criador={item.kicker}
                    />
                ))
            }
            </div>
            <div className={styles.caseMissed}>
                <h1>In Case You Missed It</h1>
            {
                api.slice((api.length - 5), (api.length)).map((item, x) =>(
                    <Post
                        key={x}
                        urlImagem={item.multimedia !== null ? item.multimedia[1].url : semUrl}
                        titulo={item.title}
                        largura= '100px'
                        altura= '100px'
                    />
                ))
            }
            </div>
        </aside>
    </section>
  )
}
export default Home