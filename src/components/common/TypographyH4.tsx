import React from 'react';
import { Typography } from '@mui/material';

const TypographyStyle = {
  fontWeight: 'bold'
};

type TypographyComponentProps = {
  text: string;
  color?: string;
};

const TypographyH4Component = (props: TypographyComponentProps) => (
  <Typography variant="h4" sx={TypographyStyle} color={props.color}>
    {props.text}
  </Typography>
);

export default TypographyH4Component;
