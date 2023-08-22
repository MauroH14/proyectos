import './App.css';
import CartaPresentacion from './componentes/CartaPresentacion';

function App() {

  return (
    <div className="App">
      <div className='contenedor-priincipal'>
        <h1 id="titulo">
          ¡Como se Compone Mi Familia!
        </h1>
          <div>
            <CartaPresentacion />
          </div>
      </div>
    </div>
  );
}

export default App;
