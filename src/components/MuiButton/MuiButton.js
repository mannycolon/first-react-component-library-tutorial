
import React from 'react';
import Button from '@material-ui/core/Button';

const MuiButton = ({ text }) => (
  <Button variant="contained" color="primary">
    {text}
  </Button>
);

export default MuiButton;