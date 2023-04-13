import React from "react";
import {Grid, Typography} from "@mui/material"
import { amber} from "@mui/material/colors";
import TypographyH4Component from "../TypographyH4";
import TypographyH6Component from "../TypographyH6";
import MainButtonComponent from "../Button";
import CategoryCardComponent from "./CategoryCard";

const ContainerStyle = {
    my:6,
    justifyContent:"center"
}

const GridItemStyle = {
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
}

const CategoryNames = [{id:1, name:"Headphones"},{id:2, name:"Beats"}, {id:3, name:"Notebooks"}, {id:4, name:"Cameras"}, {id:5, name:"Gaming"}, {id:6, name:"Video"}];

const CategoriesComponent = () => {
    return(
    <Grid container sx={ContainerStyle}>
        <Grid item xs={12} sx={GridItemStyle}>
            <Typography variant="body1" color={amber[500]}>CATEGORIES</Typography>
            <TypographyH4Component text="Choose your product by categories"></TypographyH4Component>
            <TypographyH6Component color="gray" text="Buy Music Instruments & Accessories Online:"></TypographyH6Component>
            <TypographyH6Component color="gray" text="Securely and Comfortably"></TypographyH6Component>
            <MainButtonComponent margin="30px" text="See all categories"></MainButtonComponent>
        </Grid>

        <Grid xs={10} display={"flex"} padding={3}>
            {CategoryNames.map((cn) => (
                <CategoryCardComponent key={cn.id} text={cn.name}></CategoryCardComponent>
            ))}
        </Grid>
    </Grid>
    )
}

export default CategoriesComponent;