import * as React from 'react';
import { useState, useEffect,useCallback, useRef } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HackathonCard from './Design/HackathonCards';
import { db } from "../Firebase";
import { useSelector, useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { upDate } from "../Utils/Store";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const DisplayCards=()=> {
  const isMounted = useRef(false);
  const isMounted2 = useRef(false);
   const dispatch = useDispatch();
   const data = useSelector((state) => state.Notes);
  const dataFetched = useSelector((state) => state.Data);
    const [hackCard, setHackCard] = useState([]);
    const [updatedCard, setUpdatedCard] = useState([]);
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setHackCard([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((x) => 
                {
                setHackCard((oldArray) => [...oldArray,x])
                setUpdatedCard((oldArray) => [...oldArray,x])
                // dispatch(upDate(hackCard))
                
              }   
              );
            }
          });
        }, []);
        useEffect(() => {
          if (isMounted.current) {
            setTimeout(() => {
          getFilter();
        }, 1000);
        console.log("ks");
        console.log(data.name);
      } else {
        isMounted.current = true;
      }
    }, [data.data]);
    const getFilter = useCallback(() => {
      const filteredData = updatedCard.filter(
        (item) => {
          switch (data.name) {
            case "Level":
              if(data.data.includes("All"))
              {
                return updatedCard;
              }
            //  else if (data.data[0]===item.level||data.data[1]===item.level||data.data[2]===item.level||data.data[3]===item.level||data.data[4]===item.level||data.data[5]===item.level) {
            else if(data.data.includes(item.level))   {
            return item;
              } 
  
              break;
  
            case "Status":
              if(data.data.includes("All"))
              {
                return updatedCard;
              }
            //  else if (data.data[0]===item.level||data.data[1]===item.level||data.data[2]===item.level||data.data[3]===item.level||data.data[4]===item.level||data.data[5]===item.level) {
            else if(data.data.includes(item.newStatus))   {
            return item;
              } 
  
              break;
           
            case "Search":
              if (
                item.name.includes(data.data)
              ) {
                
                console.log("found");
                return item;
              } 
                
              
              break;
  
            default:
              
              return item;
          }
          return 0;
        },
        [data.data]
      );
      setHackCard(filteredData);
      // console.log(filterData)
      console.log(filteredData);
      console.log(hackCard);
      console.log(updatedCard);
    });
  return (
    <Box sx={{ width: '100%',backgroundColor:'#003145'}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
      {hackCard.map((x) => (
        <Grid item xs={12} md={4} key={Math.random()}>
          <HackathonCard value={x }/>
        </Grid>
        ))}
       
      </Grid>
    </Box>
  );
}

export default DisplayCards;