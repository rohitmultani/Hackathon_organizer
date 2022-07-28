import { useParams } from "react-router-dom"
import { Fragment,useState,useEffect } from "react";    
import NavBar from "../Components/NavBar";
import { Box, Typography } from "@mui/material";
const ViewDescription = () =>{
    const { id} = useParams();
    return (
        <Fragment>
            <NavBar/>
{/* {id} */}
<Box sx={{backgroundColor:'#003145',height:'50vh'}}>
    <Box>
    <Typography sx={{backgroundColor:'#FFCE5C',width:'50vw',m:3}}>Starts on 17th Jun'22 09:00 PM (India Standard Time)</Typography>
    </Box>
    <Typography></Typography>
    <Typography></Typography>
    <Typography></Typography>
</Box>

        </Fragment>
    )
}
export default ViewDescription;