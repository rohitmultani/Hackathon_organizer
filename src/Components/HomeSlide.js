import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import rocket  from '../Images/rocket1.svg'
const HomeSlide=()=> {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', backgroundColor:"#003145" ,height:{sm:'100vh'},color:'white',flexWrap:'wrap'}}>
      <Typography component="div" sx={{height:100,width:10,backgroundColor:"#FFCE5C",display:{sm:'absolute'},top:20,ml:10,mt:10}}>
            
            </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' ,width:'51vw',m:{md:4,sm:0},color:'white'}}>
          <Typography component="div" variant="h2">
            Accelerate Innovation
          </Typography>
          <Typography component="div" variant="h3">
            with Global AL Challenges
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{mt:1}}>
            Al Challenges at DPhi Simulate real-world problems. It is a great place to put your Al/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <Button variant="contained" sx={{backgroundColor:'white', color:'black',mt:10,fontWeight:700,p:1}}>
            <Link to="/create" style={{textDecoration:'none',color:'black'}}>
            Create Challenge
            </Link>
            </Button>
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,color:'white' }}>
         
          
          
        </Box>
      </Box>
      <CardMedia
        sx={{ width: 300,mt:3,ml:'auto' }}
        image={rocket}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default HomeSlide;