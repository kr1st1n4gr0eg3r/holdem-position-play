import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import '../css/cards.css';

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
  switch (suit) {
    case '♣': return 'green';
    case '♥': return 'red';
    case '♦': return 'blue';
    case '♠': return 'black';
    default: return 'black';
  }
};

const Cards = ({ onCardSelection }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    onCardSelection(selectedCards);
  }, [selectedCards, onCardSelection]);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
    } else {
      const newSelection = [...selectedCards.slice(1), card];
      setSelectedCards(newSelection);
    }
  };

  return (
    <Box className="cardsSection">
      <Typography variant="h3" component="h2" className="cardsTitle" gutterBottom>
        Cards
      </Typography>
      <Box className="cardsContainer">
        {suits.map(suit => (
          ranks.map(rank => (
            <Box
              key={`${rank.value}${suit}`}
              className={`card ${selectedCards.includes(`${rank.value}${suit}`) ? 'selected' : ''}`}
              onClick={() => handleCardClick(`${rank.value}${suit}`)}
            >
              <Typography variant="h6">
                <span className="rank" style={{ color: getColor(suit) }}>{rank.label}</span>
                <span className="suit" style={{ color: getColor(suit) }}>{suit}</span>
              </Typography>
            </Box>
          ))
        ))}
      </Box>
    </Box>
  );
};

export default Cards;
