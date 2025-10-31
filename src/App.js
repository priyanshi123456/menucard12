import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>🍕 Welcome to Our Pizza Menu!</h2>
<img src={process.env.PUBLIC_URL + '/menu.jpg'} alt="Menu" />

     
    </div>
  );
}

export default App;
