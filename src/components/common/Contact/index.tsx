import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { BoxStyled, SmallButtonStyled } from "./styles";

export const Contact = () => (
    <Box>
        <Typography>Need a support?</Typography>
        <BoxStyled>
            <SmallButtonStyled color="info" variant="text">
                <PhoneIcon />
                Contact sales
            </SmallButtonStyled>
            <SmallButtonStyled variant="text">
                <EmailIcon />
                Email us
            </SmallButtonStyled>
        </BoxStyled>
    </Box>

);

export default Contact;