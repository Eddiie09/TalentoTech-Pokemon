import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetailPage from './pages/PokemonDetailPage';
import PokemonListPage from './pages/PokemonListPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <NavBar links={[{label:"Lista",path:"/"}]}/>
      <Routes>
        <Route path='/' element ={<PokemonListPage/>}/>
        <Route path='/pokemon/:name' element ={<PokemonDetailPage/>}/>
      </Routes>
      </Router>
      
      </>
  )
}

export default App;

