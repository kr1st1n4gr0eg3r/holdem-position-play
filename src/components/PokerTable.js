import React from 'react';
import { Button, Typography, Box, Chip } from '@mui/material';
import PositionChip from './PositionChip';
import '../css/positions.css';

const PokerTable = ({ positions, selectedPosition, onButtonClick, selectedCards }) => {
  return (
    <Box className="pokerTableContainer">
      <Typography variant="h3" component="h2" className="cardsTitle" gutterBottom>
        Position
      </Typography>
      <Box className="pokerTable">
        <Box className="tableBackground">
          {positions.map((pos) => (
            <Button
              key={pos.id}
              id={pos.id}
              size="small"
              variant="contained"
              color="primary"
              className={`position ${pos.className}`}
              onClick={() => onButtonClick(pos.id)}
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
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <PositionChip
          id={selectedPosition.id}
          label={selectedPosition.label}
          category={selectedPosition.category}
        />
        <Chip label={selectedCards[0] || "Card 1"} variant="outlined" disabled={!selectedCards[0]} />
        <Chip label={selectedCards[1] || "Card 2"} variant="outlined" disabled={!selectedCards[1]} />
      </Box>
    </Box>
  );
};

export default PokerTable;
