import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div style={{height: "screen", width: "100%", display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <Home buttonText="Click Me" />
    </div>
  );
}

export default App;
