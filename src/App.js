import logo from './logo.svg';
import './App.css';
import { Favs } from './components/Favs'
import { PerritosAleatorios } from './components/PerritosAleatorios'
/* import { SubirPerrito } from './components/SubirPerrito' */
/* API SHIT */
/* ----------------------------------------- */
const API_KEY = '?api_key=7207963f-ba39-4fb6-9297-91c30bfa1c42'
const URL_FAV = 'https://api.thedogapi.com/v1/favourites'
const URL_UPLOAD = 'https://api.thedogapi.com/v1/images/upload'
const URL = 'https://api.thedogapi.com/v1/images/search?limit=2'
const HEADERS = {
  'Content-Type': 'application/json',
}

function App() {
  return (
    <>
      <div className='banner'>
        <p >
          By <a href="https://niiico.com">Nico</a>
        </p>
      </div>

      <PerritosAleatorios />
      <Favs />  {/* 
        <SubirPerrito />
 */}
    </>
  );
}

export default App;
