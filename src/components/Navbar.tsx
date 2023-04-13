import React from "react";
import {Grid, Typography, Toolbar, Stack, Button} from "@mui/material"
import MainButtonComponent from "./Button";

const ButtonStyle = {
    color:"inherit",
    textTransform:'capitalize'
}

const ContainerStyle = {
    justifyContent:"center",
    alignItems:"center",
    position:"static",
    my:3
}

const StackStyle = {
    spacing:2,
    justifyContent:"end",
}

const ButtonText = [{id:1, name:"Company"},{id:2, name:"Account"}, {id:3, name:"Pages"}, {id:4, name:"Blog"}, {id:5, name:"Portofolio"}];

const NavBarComponent = () => {
    return(
    <Grid container sx={ContainerStyle}>
        <Grid item xs={3}>
            <Toolbar>
                <Typography variant="h5">eShop logo</Typography>
            </Toolbar>
        </Grid>
        <Grid item xs={7}>
            <Stack sx={StackStyle} direction="row">
                <Button sx={ButtonStyle}>
                    <Typography fontWeight="bold">Landings</Typography>
                </Button>
                {ButtonText.map((bt) => (
                <Button sx={ButtonStyle} key={bt.id}>{bt.name}</Button>
                ))}
                <MainButtonComponent text="Buy now"></MainButtonComponent>
            </Stack>
        </Grid>
    </Grid>
    )
}

export default NavBarComponent;