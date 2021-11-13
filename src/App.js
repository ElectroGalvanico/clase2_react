import React, {useState} from 'react';
import './App.css';
import { HashRouter, Link, NavLink, Route, Routes, Switch } from 'react-router-dom';

function App(){
	return(
    <HashRouter>
		<div className = 'app'>
			<h1>Hola Clase 2 de React</h1>
      <Contador />
      <NavLink to='/contacto' activestyle = {{ color : 'red' }}>Contacto</NavLink>
      &nbsp;
      <NavLink to='/acercanuestro' activestyle = {{ color : 'red' }}>Acerca Nuestro</NavLink>
        <Routes>
          <Route path='/contacto' component= {Contacto} />
          <Route path='/acercanuestro' component= {AcercaNuestro} />
          <Route path='' component= {Home} />
        </Routes>
		</div>
    </HashRouter>
	);
}

const AcercaNuestro = () => {
  return (<h2>Acerca Nuestro</h2>)
}

const Contacto = () =>{
  return <form><input /><button>Enviar</button></form>
}

const Home = () => {
  return (<h2>Home</h2>)
}


function Contador(){
  const contador = useState(0);
  const getContador = contador[0];
  const setContador = contador[1];
  return(
    <div>
      <button onClick={()=> setContador(getContador + 1)}>
        Incrementar
      </button>
      {getContador}
    </div>
  );
}

export default App;