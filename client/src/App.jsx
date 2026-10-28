import { useState, useEffect } from 'react';
import GridCanvas from './components/GridCanvas';
import './App.css';

function App() {
  const [serverStatus, setServerStatus] = useState('checking...');

  useEffect(() => {
    fetch('http://localhost:5000/health')
      .then((res) => res.json())
      .then((data) => setServerStatus(data.status === 'ok' ? 'online' : 'error'))
      .catch(() => setServerStatus('offline'));
  }, []);

  return (
    <div className="app-container">
      <h1>Dungeon Map Builder</h1>
      <p className="server-status">
        Backend: <span className={serverStatus}>{serverStatus}</span>
      </p>
      <GridCanvas />
    </div>
  );
}

export default App;