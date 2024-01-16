import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Remover from './Pages/Remover';
import Pesquisar from './Pages/Pesquisa';
import Listar from './Pages/Listar';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/listar'>
            <Listar />
          </Route>
          <Route path='/pesquisar'>
            <Pesquisar />
          </Route>
          <Route path='/remover'>
            <Remover />
          </Route>
          <Route path='/cadastro'>
            <Cadastro />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}


export default App;
