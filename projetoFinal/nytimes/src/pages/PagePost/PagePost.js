import axios from 'axios'
import { useEffect, useState } from "react"
import { HeaderPagePost } from "../../components/Header/Header"
import { Post, PostApi } from "../../components/Post/Post"

const PagePost = () => {

    let url = window.location.pathname
    url = url.split('/') 

    const [resultado, setResultado] = useState([])
    

    const api = async () => {
        try {
          const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${url[3]}.json?api-key=3PqlwJMMQnNMyrgjuqPAQsdarujrJSkA`)
          setResultado(data.results)        
        } catch (error) {
          console.log('caiu no erro', error)
        }
    }
    
    useEffect(() => {
        api()
    }, [])


  return (
    <div>
        <HeaderPagePost 
        facet={[resultado.des_facet]}
        />
        <PostApi 
            api={resultado}
        />
    </div>
  )

}
export default PagePost