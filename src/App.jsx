import './App.css';
import fondo1 from './assets/fondos/1.png';
import fondo2 from './assets/fondos/2.png';
import fondo3 from './assets/fondos/3.png';

function App() {
  
  return (
    <>
      <img className="fondo" src={fondo1} />
      <img className="fondo" src={fondo2} />
      <img className="fondo" src={fondo3} />
    </>
  )
}

export default App
