import React from 'react';
import { Button } from '@mui/material';

const ButtonStyle = {
  textTransform: 'none',
  mx: '5px'
};

type FullWidthButtonComponentProps = {
  text: string;
};

const FullWidthButtonComponent = (props: FullWidthButtonComponentProps) => (
  <Button variant="contained" sx={ButtonStyle} fullWidth>
    {props.text}
  </Button>
);

export default FullWidthButtonComponent;
