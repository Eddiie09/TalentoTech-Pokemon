import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetailPage from './pages/PokemonDetailPage';
import PokemonListPage from './pages/PokemonListPage';
import TeamPage from './pages/TeamPages';


function App() {


  return (
    <>
      <Router>
        <NavBar links={[{ label: "Lista", path: "/" }, { label: "Equipo", path: "/Team" }]} />
        <Routes>
          <Route path='/' element={<PokemonListPage />} />
          <Route path='/pokemon/:name' element={<PokemonDetailPage />} />
          <Route path='/Team' element={<TeamPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;

