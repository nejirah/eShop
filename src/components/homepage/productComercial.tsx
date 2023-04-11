import React from "react";
import {Grid, Box, Typography, Button} from "@mui/material"
import { red, blue, grey } from "@mui/material/colors";

function ProductComericalComponent() {
    return (
        <Grid container my={5} textAlign={"left"} justifyContent={"center"}>
            <Grid item xs={5}>
                <Grid my={2}>
                    <Typography variant="h3" fontWeight="bold" color={blue[500]}>Experience your music</Typography>
                    <Typography variant="h3" fontWeight="bold">like never before.</Typography>
                </Grid>

                <Grid my={2}>
                    <Typography variant="h6" color={"gray"}>Supper offer till the end of June. All the original headphones at maximum:</Typography>
                    <Typography variant="h3" fontWeight="bold" color={red[400]}>$299.95</Typography>
                </Grid>

                <Grid my={3}>
                    <Button variant="contained" size="large" style={{textTransform:'none'}}>Discover the offer</Button>
                </Grid>

                <Grid bgcolor={grey[100]} borderRadius={"10px"} p={1} xs={9}>
                    <Typography>$60 Apple Music gift card with purchase of select Beats products.*</Typography>
                </Grid>
            </Grid>

            <Grid item xs={5} justifyContent={"end"} display={"flex"}>
                <img src="https://assets.maccarianagency.com/backgrounds/img34.png"></img>
            </Grid>
        </Grid>
    )
}

export default ProductComericalComponent;

