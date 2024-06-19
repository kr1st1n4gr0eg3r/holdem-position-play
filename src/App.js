import React, { useState } from 'react';
import PokerTable from './components/PokerTable';
import Cards from './components/Cards';
import './css/App.css';

const positions = [
  { id: '1SB', label: '🍓 SB', className: 'position-SB' },
  { id: '2BB', label: '🍓 BB', className: 'position-BB' },
  { id: '3UTG', label: '🍓 UTG', className: 'position-3UTG' },
  { id: '4UTG1', label: '🍓 UTG+1', className: 'position-4UTG1' },
  { id: '5UTG2', label: '🌝 UTG+2', className: 'position-5UTG2' },
  { id: '6UTG3', label: '🌝 UTG+3', className: 'position-6UTG3' },
  { id: '7UTG4', label: '🌝 UTG+4', className: 'position-7UTG4' },
  { id: '8RS', label: '🦖 Raising Seat', className: 'position-8RS' },
  { id: '9CO', label: '🦖 Cutoff', className: 'position-9CO' },
  { id: '10DEAL', label: '🦖 Dealer', className: 'position-10DEAL' },
];

function App() {
  const [selectedPosition, setSelectedPosition] = useState({ id: '', label: '', category: '' });
  const [selectedCards, setSelectedCards] = useState([]);

  const handleButtonClick = (id) => {
    let category = '';
    if (['1SB', '2BB', '3UTG', '4UTG1'].includes(id)) {
      category = 'early';
    } else if (['5UTG2', '6UTG3', '7UTG4'].includes(id)) {
      category = 'middle';
    } else if (['8RS', '9CO', '10DEAL'].includes(id)) {
      category = 'late';
    }

    const position = positions.find(pos => pos.id === id);
    setSelectedPosition({ id: position.id, label: position.label, category });
  };

  const handleCardSelection = (cards) => {
    setSelectedCards(cards);
  };

  return (
    <div className="App">
      <div className="flexContainer">
        <PokerTable
          positions={positions}
          selectedPosition={selectedPosition}
          onButtonClick={handleButtonClick}
          selectedCards={selectedCards}
        />
        <Cards onCardSelection={handleCardSelection} />
      </div>
    </div>
  );
}

export default App;
