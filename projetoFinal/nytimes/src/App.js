import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Mundo from './pages/Mundo/Mundo';
import Politica from './pages/Politica/Politica';
import Saude from './pages/Saude/Saude';
import CienciaTecnologia from './pages/CienciaTecnologia/CienciaTecnologia';

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
      {/* <Header/>
      <Home api={informacoes}/>
      <Footer/>
      <Mundo/>  */}
      <Politica/> 
      {/* <Saude/>  */}
      {/* <CienciaTecnologia/>  */}
    </div>
     
  );
}

export default App;
