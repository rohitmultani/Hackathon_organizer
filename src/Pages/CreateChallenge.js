import {useState} from 'react'
import { Box, Button, Typography } from "@mui/material";
import { Fragment } from "react"
import TextField from '@mui/material/TextField';
import NavBar from "../Components/NavBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {db} from '../Firebase';

import {uid} from "uid";
import {storage} from "../Firebase"
import {
    ref,
    uploadBytesResumable,
    getDownloadURL 
} from "firebase/storage";
    import {set as setD,ref as refD} from "firebase/database"

const CreateChallenge=()=>{
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    let temp1;
    const startDateHandler =(e)=>{
 temp1=e.target.value.split('T').join(' ');
 setStartDate(temp1);
 console.log(temp1)
  } 
  const endDateHandler =(e)=>{
    temp1=e.target.value.split('T').join(' ');
    setEndDate(temp1);
    console.log(temp1)
} 
const submitHandler = () => {
    const uuid= uid();
    
    setD(refD(db,`/${uuid}`),{
            name,
            description,
            startDate,
            endDate,
            level,
            image
    })
    console.log(name)
    console.log(description)
    console.log(startDate)
    console.log(endDate)
    console.log(image)
    console.log(level)
};
const imageUpload = (e)=>{
    // console.log(e.target.files[0])
    const uuid= uid();
    const storageRef = ref(storage,`/files/${uuid}`)
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            // setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setImage(url);
                console.log(url)
            });
        }
    );
  }
    return(
        <Fragment>
            <NavBar/>
            <Box sx={{backgroundColor:'#F8F9FD'}}>
                <Typography variant="h4" sx={{p:2}}>
                    Create Challenge
                </Typography>
            </Box>
            <Box sx={{m:{xs:0,md:2}}}>
                <Typography>Challenge Name</Typography>
            <TextField id="fullWidth" sx={{width:{xs:'100vw',md:'30vw'}}} onChange={(e)=>setName(e.target.value)}/>
                <Typography>Start Date</Typography>
                <TextField type="datetime-local" sx={{width:{xs:'100vw',md:'30vw'}}} onChange={startDateHandler}>
                </TextField>
                
                <Typography>End Date</Typography>
                <TextField type="datetime-local" sx={{width:{xs:'100vw',md:'30vw'}}} onChange={endDateHandler}></TextField>

                <Typography>Description</Typography>
            <TextField id="fullWidth" sx={{width:{xs:'100vw',md:'30vw'}}} multiline
          maxRows={4} onChange={(e)=>setDescription(e.target.value)}/>
                <Typography>Upload Image</Typography>
                <TextField type="file" sx={{width:{xs:'100vw',md:'30vw'}}} onChange={imageUpload}> </TextField>

        
        
                <Typography>Level</Typography>
                <FormControl sx={{width:{xs:'100vw',md:'30vw'}}}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          
          onChange={handleChange}
        >
          <MenuItem value={"Easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Hard"}>Hard</MenuItem>
        </Select>
      </FormControl>
            </Box>
      <Button variant="contained" sx={{width:{xs:'100vw',md:'30vw'},m:{xs:0,md:2},backgroundColor:'#44924C',color:'white'}} onClick={submitHandler}> Save Changes</Button>
        </Fragment>
    )
}
export default CreateChallenge;