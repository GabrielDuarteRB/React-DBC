import './App.css';
import axios from 'axios'
import {useEffect} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  const api = async () => {
    try {
      const {data} = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3PqlwJMMQnNMyrgjuqPAQsdarujrJSkA')
      console.log(data)
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
      <Footer/>
    </div>
  );
}

export default App;
