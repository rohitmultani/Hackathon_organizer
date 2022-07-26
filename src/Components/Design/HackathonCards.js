import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import people from '../../Images/people.svg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const HackathonCard=(props)=> {
  console.log(props)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.value.image}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:'center'}}>
        <Typography gutterBottom variant="h5" component="div">
      {props.value.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{backgroundColor:"#F2C94C",width:100,m:'auto'}}>
         Upcoming
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{m:1}}>
          Starts in
        </Typography>
        <Typography sx={{m:1}}>
        00:00:12  
        </Typography>
        <Button variant="contained" sx={{backgroundColor:'#44924C',color:'white'}}>
<TaskAltIcon sx={{m:1}}/> 
           Participate Now
        </Button>
      </CardContent>
      <CardActions sx={{textAlign:'center'}}>
        
      </CardActions>
    </Card>
  );
}
export default HackathonCard;
