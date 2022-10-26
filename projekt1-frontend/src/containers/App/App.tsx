import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Competitors from '../../pages/Competitors';
import Games from '../../pages/Games';
import Rounds from '../../pages/Rounds';
import './App.css';
import Colors from "../../colors.json"
import Home from '../../pages/Home';

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: Colors["third"], textAlign: 'center', overflow: "visible" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/rounds" element={<Rounds />} />
          <Route path="/games/round/:roundId" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
