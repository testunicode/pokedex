import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Captured from './pages/Captured';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:pokemonId" element={<Details />} />
        <Route path="/captured" element={<Captured />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
