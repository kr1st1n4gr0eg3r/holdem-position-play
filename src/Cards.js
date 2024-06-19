// src/Cards.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import './cards.css';

const suits = ['♥', '♠', '♦', '♣'];
const ranks = [
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: 'J', value: 'J' },
  { label: 'Q', value: 'Q' },
  { label: 'K', value: 'K' },
  { label: 'A', value: 'A' }
];

const getColor = (suit) => {
  switch(suit) {
    case '♣': return 'green';
    case '♥': return 'red';
    case '♦': return 'blue';
    case '♠': return 'black';
    default: return 'black';
  }
};

const Cards = () => {
  return (
    <Box className="cardsContainer">
      {suits.map(suit => (
        ranks.map(rank => (
          <Box key={`${rank.value}${suit}`} className="card">
            <Typography variant="h6" style={{ color: getColor(suit) }}>
              <span className="rank">{rank.label}</span>
              <span className="suit" style={{ color: getColor(suit) }}>{suit}</span>
            </Typography>
          </Box>
        ))
      ))}
    </Box>
  );
};

export default Cards;
