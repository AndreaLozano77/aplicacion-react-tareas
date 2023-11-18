import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.jpg'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    // Contenedor principal
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
       <img src={freeCodeCampLogo} className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
       <h1>Mis Tareas</h1>
       <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
