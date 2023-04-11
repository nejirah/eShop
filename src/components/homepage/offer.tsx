import React from "react";
import {Grid, Box, Typography, Button} from "@mui/material"
import { amber, red } from "@mui/material/colors";
import { start } from "repl";

function OfferComponent(){
    return(
        <Grid container bgcolor={amber[500]} xs={12}  style={{display:"flex"}} justifyContent={"center"}>
            <Grid item my={2} xs={6} textAlign={"left"}>
                <Typography variant="h3" fontWeight="bold">Experience your music like never before.</Typography>
                <Typography mb={3}>If we re no longer the right solution for you, well allow you to export and take your data at anytime for any reason.</Typography>
                <Button variant="contained" size="large" style={{textTransform:'none'}}>Discover the offer</Button>
            </Grid>
            <Grid item xs={4}>
                <img src="https://assets.maccarianagency.com/backgrounds/img33.png" style={{width:"300px"}}></img>
            </Grid>
        </Grid>
    )
}

export default  OfferComponent;