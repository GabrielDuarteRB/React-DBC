import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

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
      <Header/>
      <Home api={informacoes}/>
      <Footer/>
    </div>
  );
}

export default App;
