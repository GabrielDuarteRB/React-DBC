import axios from 'axios'
import { useEffect, useState } from "react"
import { HeaderPagePost } from "../../components/Header/Header"
import { Post, PostApi } from "../../components/Post/Post"

const PagePost = () => {

    let url = window.location.pathname
    url = url.split('/') 

    const [resultado, setResultado] = useState([])
    const [urlImg, setUrlImg] = useState('')

    const api = async () => {
        try {
          const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${url[3]}.json?api-key=wRefsADGPRpDZ6hLhaEVEVtTAmUXEOyW`)
          console.log(data.results)
          data.results.map((item, i) =>{
            if(parseInt(i) === parseInt(url[2])) {
                item.multimedia.forEach((x) =>{
                  setUrlImg(x.url)
                })
                console.log('teste')
                setResultado(item)
            }
          })     
        } catch (error) {
          console.log('caiu no erro', error)
        }
    }
    useEffect(() => {
        api()
    }, [])

    console.log(`esse eh o resultado: `, resultado)   
  return (
    <div>
        {/* <HeaderPagePost 
        facet={[resultado.title]}
        /> */}
        <Post
        titulo={resultado.title}
        conteudo={resultado.abstract}
        urlImagem={urlImg}
        altura='100px'
        largura='120px'

        />
    </div>
  )

}
export default PagePost