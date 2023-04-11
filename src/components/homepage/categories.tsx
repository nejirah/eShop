import React from "react";
import {Grid, Typography,  Button, Card} from "@mui/material"
import { amber,grey } from "@mui/material/colors";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MonitorIcon from '@mui/icons-material/Monitor';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import VideocamIcon from '@mui/icons-material/Videocam';

function CategoriesComponent(){
    return(
    <Grid container my={6} justifyContent={"center"}>
        <Grid item xs={12}>
            <Typography variant="body1" color={amber[500]}>CATEGORIES</Typography>
            <Typography variant="h4" fontWeight={"bold"}>Choose your product by categories</Typography>
            <Typography variant="h6" color={"gray"}>Buy Music Instruments & Accessories Online:</Typography>
            <Typography variant="h6" color={"gray"}>Securely and Comfortably</Typography>
            <Button variant="contained" style={{textTransform:'none', margin:"30px"}} size="large">See all categories</Button>
        </Grid>
        <Grid xs={10} style={{display:"flex"}} justifyContent={"center"} padding={3}>
                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <HeadphonesIcon color="primary" fontSize="large"></HeadphonesIcon>
                        <p>Headphones</p>
                    </Card>
                </Grid>
                
                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <MusicNoteIcon color="primary" fontSize="large"></MusicNoteIcon>
                        <p>Beats</p>
                    </Card>
                </Grid>

                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <MonitorIcon color="primary" fontSize="large"></MonitorIcon>
                        <p>Notebooks</p>
                    </Card>
                </Grid>

                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <CameraAltIcon color="primary" fontSize="large"></CameraAltIcon>
                        <p>Cameras</p>
                    </Card>
                </Grid>

                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <ViewInArIcon color="primary" fontSize="large"></ViewInArIcon>
                        <p>Gaming</p>
                    </Card>
                </Grid>

                <Grid item  xs={2} m={2}>
                    <Card style={{padding:"15px", backgroundColor:"#f7fafe"}} variant="outlined">
                        <VideocamIcon color="primary" fontSize="large"></VideocamIcon>
                        <p>Video</p>
                    </Card>
                </Grid>
        </Grid>
    </Grid>
    )
}

export default CategoriesComponent;