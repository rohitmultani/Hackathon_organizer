import { Box, CardMedia, Typography } from "@mui/material";

const HomeCards=(props)=>{
    console.log(props)
    return(  
        <Box sx={{backgroundColor:'#F8F9FD',height:200}}>
           
      <img src={props.image} alt="demo image" style={{margin:10}}></img>
            <Typography variant="h5" sx={{m:2}}>{props.title}</Typography>
            <Typography sx={{m:2}}>{props.details}</Typography>
        </Box>
      )

}
export default HomeCards;