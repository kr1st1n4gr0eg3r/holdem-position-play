import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import PositionChip from './PositionChip';
import '../css/positions.css';

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

const PokerTable = () => {
  const [selectedPosition, setSelectedPosition] = useState({ id: '', label: '', category: '' });

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

  return (
    <Box className="pokerTable">
    <div className="positionTitle">
      <Typography variant="h3" component="h2" gutterBottom>
        Position
      </Typography>
      </div>
      <Box className="tableBackground">
        {positions.map((pos) => (
          <Button
            key={pos.id}
            id={pos.id}
            size="small"
            variant="contained"
            color="primary"
            className={`position ${pos.className}`}
            onClick={() => handleButtonClick(pos.id)}
          >
            {pos.label}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component="div" sx={{ display: 'flex', gap: 2 }}>
          <p>🦖 = late</p>
          <p>🌝 = middle</p>
          <p>🍓 = early</p>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <PositionChip
          id={selectedPosition.id}
          label={selectedPosition.label}
          category={selectedPosition.category}
        />
      </Box>
    </Box>
  );
};

export default PokerTable;
