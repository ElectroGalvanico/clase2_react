import React, {useState} from 'react';
import './App.css';
import { HashRouter, Link, NavLink, Route, Routes, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles' ;
import Grid from '@material-ui/core/Grid';
import {Transition, CSSTransition} from 'react-transition-group/Transition';

function App(){
	return(
    <HashRouter>
    <MuiThemeProvider theme = {theme}>
    <Grid container>
		<div className = 'app'>
      <Grid item xs = {12}>
			<h1>Hola Clase 2 de React</h1>
      </Grid>
      <Grid item xs = {6}>
      <Contador titulo />
      </Grid>
      <NavLink to='/contacto' activestyle = {{ color : 'red' }}>Contacto</NavLink>
      &nbsp;
      <NavLink to='/acercanuestro' activestyle = {{ color : 'red' }}>Acerca Nuestro</NavLink>
        <Routes>
          <Route path='/contacto' component= {Contacto} />
          <Route path='/acercanuestro' component= {AcercaNuestro} />
          <Route path='' component= {Home} />
        </Routes>

      <Button>Enviar</Button>
		</div>
    </Grid>
    </MuiThemeProvider>
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

//ACTIONS -> REDUCER -> STORE

let action = { type: 'AUMENTAR'};
let reducer = (state = 0, action) => {
  switch (action.type){
    case 'AUMENTAR':
      return state + 1;
    case 'DISMINUIR':
      return state - 1;
    default :
      return state;
  }
};

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>
console.log(store.getState(),
console.log(titulo))
);

store.dispatch({ type: 'AUMENTAR'});
store.dispatch({ type: 'AUMENTAR'});
store.dispatch({ type: 'AUMENTAR'});
store.dispatch({ type: 'DISMINUIR'});

const theme = createMuiTheme({
  overrides : {
    MuiButton : {
      text : {
        color: 'green'
      },
    },
  }
});

export default App;