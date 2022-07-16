import './App.css';
import { Favs } from './components/Favs'
import { PerritosAleatorios } from './components/PerritosAleatorios'
/* import { SubirPerrito } from './components/SubirPerrito' */
/* API SHIT */
/* ----------------------------------------- */

function App() {
  return (
    <>
      <div className='banner'>
        <p >
          By <a href="https://niiico.com">Nico</a>
        </p>
      </div>

      <PerritosAleatorios />
      <Favs />
    </>
  );
}

export default App;
