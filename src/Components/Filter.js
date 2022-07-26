import { useState } from "react";
import { Box, Menu, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '10vw',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'All',
  'Active',
  'Upcoming',
  'Past'
];
const level = [
  'Easy',
  'Medium',
  'Hard',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

  
const Filter=()=>{
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [selected, setSelected] = useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      console.log(event.target.value)
    };
  
    return(<Box sx={{backgroundColor:"#002A3B",height:'50vh'}}>

<Typography variant="h4" sx={{color:"#ffffff",textAlign:'center',pt:3}}>Explore Challenges</Typography>
<Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}}>
<Search sx={{width:'40vw',m:4,}}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{backgroundColor:"#ffffff", width:'70vw',borderRadius:3}}  
            />
          </Search>
          <FormControl sx={{ mt:{xs:0,md:4}, ml:{xs:4} ,width: 200,height:40 ,backgroundColor:'white',borderRadius:3}}>
        <InputLabel id="demo-multiple-chip-label" sx={{color:'black'}}> Filter</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
        placeholder="filter"
        sx={{height:40}}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(e) => {
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{backgroundColor:"#F8F9FD"}} />
              ))}
            </Box>
            setSelected(e)
        
          }
        }
          
        //   MenuProps={MenuProps}
        >
            <MenuItem value=""><em>Filter</em></MenuItem>
            <MenuItem value=""><em>Status</em></MenuItem>
          {names.map((name) => (
              <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
              >
                <Checkbox checked={personName.indexOf(name) > -1} />
                {name}
            </MenuItem>
          ))}
          <MenuItem value=""><em>Level</em></MenuItem>
          {level.map((level) => (
              <MenuItem
              key={level}
              value={level}
              style={getStyles(level, personName, theme)}
              >
                <Checkbox checked={personName.indexOf(level) > -1} />
                {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
</Box>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{backgroundColor:"#F8F9FD",m:1}} />
              ))}
            </Box>
    </Box>)
}
export default Filter;