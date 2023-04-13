import React from "react";
import {Typography} from "@mui/material"

const TypographyStyle = {
    fontWeight:"bold"
}

type TypographyComponentProps= {
    text:string,
    color?:string,
}

const TypographyH3Component = (props:TypographyComponentProps) => {
    return(
        <Typography variant="h3" sx={TypographyStyle} color={props.color} >{props.text}</Typography>
    )
}

export default TypographyH3Component;