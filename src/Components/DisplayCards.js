import * as React from 'react';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HackathonCard from './Design/HackathonCards';
import { db } from "../Firebase";
import { ref, onValue } from "firebase/database";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const DisplayCards=()=> {
    const [hackCard, setHackCard] = useState([]);
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setHackCard([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((x) => (
                    setHackCard((oldArray) => [...oldArray,x])
          ));
        }
    });
    }, []);
  return (
    <Box sx={{ width: '100%',backgroundColor:'#003145'}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
      {hackCard.map((x) => (
        <Grid item xs={12} md={4} key={Math.random()}>
          <HackathonCard value={x}/>
        </Grid>
        ))}
       
      </Grid>
    </Box>
  );
}

export default DisplayCards;