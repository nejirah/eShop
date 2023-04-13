import React from "react";
import {Grid, Card, Box} from "@mui/material"
import { amber, blue } from "@mui/material/colors";
import HeadphonesIcon from '@mui/icons-material/Headphones';

const GridStyle = {
    m:2,
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"column"
}

const CardStyle = {
    padding:"25px",
    backgroundColor:"#f7fafe",
    width:"100px",
    alignItems:"center",
    display:"flex",
    flexDirection:"column"
}

const IconStyle = {
    position:"relative",
    top:"5px",
    zIndex:10,
    color: blue[500],
    fontSize: "50px"
}

const BoxStyle = {
    position: "relative"
}

const CircleStyle = {
    position:"absolute",
    left:"20px",
    borderRadius: "40px",
    bgcolor:amber[500],
    height: "40px",
    width:"40px"
}

type CategoryCardComponentProps= {
    text:string;
    margin?:string;
}

const CategoryCardComponent = (props:CategoryCardComponentProps) => {
    return(
        <Grid xs={2} m={2} sx={GridStyle}>
            <Card sx={CardStyle} variant="outlined">
                <Box sx={BoxStyle} mb={1}>
                    <Box sx={BoxStyle}>
                        <Box sx={CircleStyle} ></Box>
                        <HeadphonesIcon sx={IconStyle}></HeadphonesIcon>
                    </Box>
                </Box>
                       
                <p>{props.text}</p>
            </Card>
        </Grid>
    )
}

export default CategoryCardComponent;
