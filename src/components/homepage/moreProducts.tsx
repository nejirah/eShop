import React from "react";
import {Grid, Box, Typography} from "@mui/material"
import { blue, red } from "@mui/material/colors";
import { start } from "repl";

function MoreProductsComponent(){
    return(
    <Grid container my={3} justifyContent={"center"}>
        <Grid item bgcolor={blue[500]} xs={10} borderRadius={"10px"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
            <Grid item justifyContent={"start"}>
                <img src="https://assets.maccarianagency.com/backgrounds/img35.png"></img>
            </Grid>

            <Grid color={"white"} mx={"150px"}>
                <Typography variant="h4" fontWeight={"bold"}>Fide more products</Typography>
                <Typography variant="body1">If we are no longer the right solution for you, we will allow you to export and take your data at anytime for any reason.
                </Typography>
            </Grid>

            <Grid item justifyContent={"end"}>
                <img src="https://assets.maccarianagency.com/backgrounds/img36.png"></img>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default MoreProductsComponent;