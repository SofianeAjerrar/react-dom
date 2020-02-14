import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accueil from './jsx/Accueil';
import './App.css';
import Exercice1 from './jsx/Exercice1';
import Exercice2 from './jsx/Exercice2';
import Exercice3 from './jsx/Exercice3';
import Exercice4 from './jsx/Exercice4';
import Exercice5 from './jsx/Exercice5';
import Exercice6 from './jsx/Exercice6';

function App() {
  return (
    <div className="App App-header">
      <Router>
        <div>
          <nav>
            <ul className='d-flex list-style-none fixed-top justify-content-around mt-5 px-0'>
              <li>
                <Link className='text-white' to='/Accueil'>Accueil</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice1'>Exercice 1</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice2'>Exercice 2</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice3'>Exercice 3</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice4'>Exercice 4</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice5'>Exercice 5</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice6'>Exercice 6</Link>
              </li>
              <li>
                <Link className='text-white' to='/Exercice7'>Exercice 7</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Exercice1">
              <Exercice1 />
            </Route>
            <Route path="/Exercice2">
              <Exercice2 />
            </Route>
            <Route path="/Exercice3">
              <Exercice3 />
            </Route>
            <Route path="/Exercice4">
              <Exercice4 />
            </Route>
            <Route path="/Exercice5">
              <Exercice5 />
            </Route>
            <Route path="/Exercice6">
              <Exercice6 />
            </Route>
            <Route path="/Exercice7"></Route>
            <Route path='/'>
              <Accueil />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
