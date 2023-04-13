import React from 'react';
import { Typography } from '@mui/material';

const TypographyStyle = {
  fontWeight: 'bold'
};

type TypographyComponentProps = {
  text: string;
  color?: string;
};

const TypographyH6Component = (props: TypographyComponentProps) => (
  <Typography variant="h6" sx={TypographyStyle} color={props.color}>
    {props.text}
  </Typography>
);

export default TypographyH6Component;
