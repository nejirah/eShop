import React from 'react';
import { Button } from '@mui/material';

const MainButtonStyle = {
  textTransform: 'none'
};

type MainButtonComponentProps = {
  text: string;
  margin?: string;
};

const MainButtonComponent = (props: MainButtonComponentProps) => (
  <Button variant="contained" sx={MainButtonStyle}>
    {props.text}
  </Button>
);

export default MainButtonComponent;
