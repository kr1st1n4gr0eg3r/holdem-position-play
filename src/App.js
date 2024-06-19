import React from 'react';
import PokerTable from './components/PokerTable';
import './css/App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <div className="flexContainer">
        <PokerTable />
        <Cards />
      </div>
    </div>
  );
}

export default App;
