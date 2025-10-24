import './App.css';
import fondo1 from './assets/fondos/1.png';
import fondo2 from './assets/fondos/2.png';
import fondo3 from './assets/fondos/3.png';

import Objeto from './components/Objeto';
import objetos from './data/objetos/metadata.json';

function App() {
  
  return (
    <>
      <img className="absolute top-0 left-0 max-w-full" src={fondo1} />
      <img className="absolute top-0 left-0 max-w-full" src={fondo2} />
      <img className="absolute top-0 left-0 max-w-full" src={fondo3} />
      {objetos.map((objeto, index) => (
        <Objeto key={index} objeto={objeto}/>
      ))}
    </>
  )
}

export default App
