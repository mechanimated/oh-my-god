import './App.css';
import NokemonContainer from './NokemonContainer';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Battle from './Battle';
import StartMenu from './StartMenu.js';


function App() {
  return (
    <div className="ui raised segment">
      <nav>
        <ul>
          <button>
            <Link to='/NokemonContainer'>ContactList</Link>
          </button>
          <button>
            <Link to='/Battle'>Battle 😼</Link>
          </button>
        </ul>
      </nav>
      <StartMenu />
      <Outlet />
    </div>
  );
}

export default App;
