import React, { ReactNode } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { AccordionStyled } from './styles';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const AccordionComponent = ({ title, children }: AccordionProps) => {
  return (
    <AccordionStyled defaultExpanded={true}>
      <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionStyled>
  );
};

export default AccordionComponent;
