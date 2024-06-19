import React from 'react';
import { Box, Chip } from '@mui/material';

const getColor = (suit) => {
  switch (suit) {
    case '♣': return 'green';
    case '♥': return 'red';
    case '♦': return 'blue';
    case '♠': return 'black';
    default: return 'black';
  }
};

const ChipCards = ({ selectedCards }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {selectedCards.length === 0 && (
        <>
          <Chip label="Card 1" variant="outlined" disabled />
          <Chip label="Card 2" variant="outlined" disabled />
        </>
      )}
      {selectedCards.map((card, index) => {
        const suit = card.slice(-1);
        return (
          <Chip
            key={index}
            label={card}
            sx={{ backgroundColor: getColor(suit), color: 'white' }}
          />
        );
      })}
    </Box>
  );
};

export default ChipCards;
