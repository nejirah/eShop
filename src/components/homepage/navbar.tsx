import React from "react";
import {Grid, Box, Typography, AppBar, Toolbar, Stack, Button} from "@mui/material"

function NavBarComponent(){
    return(
    <Grid container my={3} justifyContent={"center"} alignItems={"center"} position={"static"}>
        <Grid item xs={3}>
            <Toolbar>
                <Typography variant="h5">eShop logo</Typography>
            </Toolbar>
        </Grid>
        <Grid item xs={7}>
            <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                <Button color="inherit">
                    <Typography fontWeight="bold" style={{textTransform:'capitalize' }}>Landings</Typography>
                </Button>
                <Button color="inherit" style={{textTransform:'capitalize'}}>Company</Button>
                <Button color="inherit" style={{textTransform:'capitalize'}}>Account</Button>
                <Button color="inherit" style={{textTransform:'capitalize'}}>Pages</Button>
                <Button color="inherit" style={{textTransform:'capitalize'}}>Blog</Button>
                <Button color="inherit" style={{textTransform:'capitalize'}}>Portofolio</Button>
                <Button variant="contained" style={{textTransform:'none'}}>Buy now</Button>
            </Stack>
        </Grid>
    </Grid>
    )
}

export default NavBarComponent;