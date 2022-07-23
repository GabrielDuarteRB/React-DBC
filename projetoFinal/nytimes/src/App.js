import './App.css';
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Home from './pages/Home/Home';
import Mundo from './pages/Mundo/Mundo';
import Politica from './pages/Politica/Politica';
import Saude from './pages/Saude/Saude';
import Ciencia from './pages/Ciencia/Ciencia';
import Tecnologia from './pages/Tecnologia/Tecnologia';
import Footer from './components/Footer/Footer';
import PagePost from './pages/PagePost/PagePost';

function App() {

  const [informacoes, setInformacoes] = useState([])

  const api = async () => {
    try {
      const {data} = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3PqlwJMMQnNMyrgjuqPAQsdarujrJSkA')
      setInformacoes(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    api()
  }, [])
  

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home api={informacoes}/>} />
          <Route path='/World' element={<Mundo/>} />
          <Route path='/Politics' element={<Politica/>} />
          <Route path='/Health' element={<Saude/>} />
          <Route path='/Science' element={<Ciencia/>} />
          <Route path='/Tech' element={<Tecnologia />} />
          <Route exact path='/Post/:id/:categoria' element={<PagePost />} />
        </Routes>
        {/* <Footer/>  */}
      </BrowserRouter>

    </div>
     
  );
}

export default App;
