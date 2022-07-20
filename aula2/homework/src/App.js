import './App.css';
import {ConteudoPrincipalContato, ConteudoPrincipalHome, ConteudoPrincipalSobre} from './componentes/ConteudoPrincipal/ConteudoPrincipal';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header.js'
import Frame from './componentes/Frame/Frame';

function App() {

  const urlMapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4089120483886!2d-51.203485184761455!3d-29.996412836004904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1658265813691!5m2!1spt-BR!2sbr"
  const urlYoutube = "https://www.youtube.com/embed/lq5hlLaa16s"
  

  return (
    <div >
      <Header/>
      {/* Prmeira Página */}
      {/* <ConteudoPrincipalHome 
        titulo='Estamos aprendendo React com o melhor professor de todos'
      />
      <Frame 
        titulo='Endereço da DBC' 
        link={urlMapa}/> 
      */}
      {/* Segunda Página */}
      {/* <Frame 
        titulo='Sobre a DBC'
        link={urlYoutube}
      />
      <ConteudoPrincipalSobre /> */}
      {/* Terceira Página */}
      <ConteudoPrincipalContato titulo='Contato'/>
      <Footer/>
    </div>
  );
}

export default App;
