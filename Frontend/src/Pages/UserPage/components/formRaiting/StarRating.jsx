import React from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ value, onChange }) => {
  return (
    <Rating
      name="star-rating"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default StarRating;
