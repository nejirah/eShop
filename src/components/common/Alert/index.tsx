import React from 'react';
import { Snackbar, Alert } from '@mui/material';

type AlertProps = {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  text: string;
};

const AlertSnackbar = ({ open, handleClose, text }: AlertProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
