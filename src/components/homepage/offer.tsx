import React from "react";
import {Grid, Typography} from "@mui/material"
import { amber} from "@mui/material/colors";
import MainButtonComponent from "../Button";

const ImageSource="https://assets.maccarianagency.com/backgrounds/img33.png";

const ContainerStyle = {
    backgroundColor: amber[500],
    display:"flex",
    justifyContent:"center"
}

const GridStyle = {
    my:10,
    textAlign:"left",
    mx:10
}


const OfferComponent = () => {
    return(
        <Grid container xs={12} sx={ContainerStyle}>
            <Grid item sx={GridStyle} xs={6}>
                <Typography variant="h3" fontWeight="bold">Experience your music like never before.</Typography>
                <Typography mb={3}>If we re no longer the right solution for you, well allow you to export and take your data at anytime for any reason.</Typography>
                <MainButtonComponent text="Discover the offer"></MainButtonComponent>
            </Grid>
            <Grid item xs={4}>
                <img src={ImageSource} style={{width:"300px"}}></img>
            </Grid>
        </Grid>
    )
}

export default  OfferComponent;