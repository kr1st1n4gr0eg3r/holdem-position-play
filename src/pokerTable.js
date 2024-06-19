import React from 'react';
import { Button, Typography, Box, Chip, Stack } from '@mui/material';
import './positions.css';

const positions = [
  { id: '1SB', label: '🍓 SB', className: 'position-SB'},
  { id: '2BB', label: '🍓 BB', className: 'position-BB'},
  { id: '3UTG', label: '🍓 UTG', className: 'position-3UTG'},
  { id: '4UTG1', label: '🍓 UTG+1', className: 'position-4UTG1' },
  { id: '5UTG2', label: '🌝 UTG+2', className: 'position-5UTG2' },
  { id: '6UTG3', label: '🌝 UTG+3', className: 'position-6UTG3' },
  { id: '7UTG4', label: '🌝 UTG+4', className: 'position-7UTG4' },
  { id: '8RS', label: '🦖 Raising Seat', className: 'position-8RS' },
  { id: '9CO', label: '🦖 Cutoff', className: 'position-9CO' },
  { id: '10DEAL', label: '🦖 Dealer', className: 'position-10DEAL'},
];

const PokerTable = () => {
  return (
    <Box className="PokerTable">
      <Typography variant="h3" component="h2" gutterBottom className="positionTitle">
        Position 
      </Typography>
      <Stack direction="row" spacing={1}>
      <Chip label="Position" variant="outlined" />
    </Stack>
      <Box className="tableBackground">
        {positions.map((pos) => (
          <Button
            key={pos.id}
            id={pos.id}
            size="small"
            variant="contained"
            color="primary"
            className={`position ${pos.className}`}
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
  );
};

export default PokerTable;
