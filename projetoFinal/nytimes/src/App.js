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
  const [tempo, setTempo] = useState([])

  const apiNYTimes = async () => {
    try {
      const {data} = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3PqlwJMMQnNMyrgjuqPAQsdarujrJSkA')
      setInformacoes(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const apiTempo = async (lat, long) => {
    try {
      const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather/', {
        params: {
          lat: lat,
          lon: long,
          appid: 'df634a695c9b8a8029b0187e41931ee4',
          lang: 'pt',
          units: 'metric'
        }
      })
      setTempo(data.main)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
    
  }
  
  useEffect(() => {
    apiNYTimes()
    navigator.geolocation.getCurrentPosition((position)=> {
      apiTempo(position.coords.latitude, position.coords.longitude)
    })
  }, [])
  
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home api={informacoes} apiNYTimes={tempo}/>} />
          <Route path='/World' element={<Mundo/>} />
          <Route path='/Politics' element={<Politica/>} />
          <Route path='/Health' element={<Saude/>} />
          <Route path='/Science' element={<Ciencia/>} />
          <Route path='/Tech' element={<Tecnologia />} />
          <Route exact path='/Post/:id/:categoria' element={<PagePost />} />
        </Routes>
      </BrowserRouter>

    </div>
     
  );
}

export default App;
