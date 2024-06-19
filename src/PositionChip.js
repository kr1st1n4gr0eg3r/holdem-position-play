// src/PositionChip.js
import React from 'react';
import { Chip } from '@mui/material';

const PositionChip = ({ id, label, category }) => {
  return (
    <Chip
      key={id}
      label={category ? `${label} - ${category}` : 'Position'}
      variant={category ? 'default' : 'outlined'}
    />
  );
};

export default PositionChip;
