import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Competitors from '../../pages/Competitors';
import Games from '../../pages/Games';
import Rounds from '../../pages/Rounds';
import './App.css';
import Colors from "../../colors.json"
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import { ClientsContext } from '../../store/ClientsContext';
import { useAuth0 } from '@auth0/auth0-react';
import PrincipalContextProvider, { PrincipalContext } from '../../store/Principalcontext';
import { useContext, useEffect, useState } from 'react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const { setPrincipal } = useContext(PrincipalContext);
  const { authenticationClient } = useContext(ClientsContext);
  const [loading, setLoading] = useState<boolean>(true);

  async function managePrincipal() {
    if (isAuthenticated) {
      setLoading(true);
      setPrincipal(await authenticationClient.getCurrentPrincipal());
      setLoading(false);
    } else {
      setLoading(false);
      setPrincipal(undefined);
    }
  }

  useEffect(() => {
    managePrincipal();
  }, [isAuthenticated])

  return (


    <div className="App" style={{ minWidth: '100vw', minHeight: '100vh', backgroundColor: Colors["third"], textAlign: 'center', overflow: "visible" }}>
      <HashRouter>
        <Header />
        {isLoading || loading ? <h1>Loading...</h1> : <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/rounds" element={<Rounds />} />
          <Route path="/games/round/:roundId" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>}
      </HashRouter>
    </div >
  );
}

export default App;
