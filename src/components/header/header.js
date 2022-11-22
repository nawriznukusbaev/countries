import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {FormControl} from "@mui/material";
import {InputLabel} from "@mui/material";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";

import {useDispatch} from "react-redux";
import {addRegion} from "../../redux/store/actionsCreators";




export default function MenuAppBar() {
    const dispatch=useDispatch();
    return (
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Countries
                    </Typography>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Regions</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Regions"
                            onChange={(e)=>{
                               dispatch(addRegion(e.target.value))
                            }}
                        >
                            <MenuItem value={'all'}>All</MenuItem>
                            <MenuItem value={'Asia'}>Asia</MenuItem>
                            <MenuItem value={'Europe'}>Europe</MenuItem>
                            <MenuItem value={'Americas'}>Americas</MenuItem>
                            <MenuItem value={'Oceania'}>Oceania</MenuItem>
                            <MenuItem value={'Africa'}>Africa</MenuItem>
                            <MenuItem value={'Polar'}>Polar</MenuItem>

                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </Box>
    );
}




