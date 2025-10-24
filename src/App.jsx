import './App.css';
import fondo1 from './assets/fondos/1.png';
import fondo2 from './assets/fondos/2.png';
import fondo3 from './assets/fondos/3.png';

function App() {
  
  return (
    <>
      <img className="absolute top-0 left-0 max-w-full" src={fondo1} />
      <img className="absolute top-0 left-0 max-w-full" src={fondo2} />
      <img className="absolute top-0 left-0 max-w-full" src={fondo3} />
    </>
  )
}

export default App
