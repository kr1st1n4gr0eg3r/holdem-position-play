import React, { useState } from 'react';
import PokerTable from './components/PokerTable';
import Cards from './components/Cards';
import './css/App.css';

function App() {
  const [selectedPosition, setSelectedPosition] = useState({ id: '', label: '', category: '' });
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div className="App">
      <div className="flexContainer">
        <PokerTable
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          selectedCards={selectedCards}
        />
        <Cards setSelectedCards={setSelectedCards} />
      </div>
    </div>
  );
}

export default App;
