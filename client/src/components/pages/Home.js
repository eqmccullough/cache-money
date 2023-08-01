import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PiePlot from '../PiePlot';
import '../../styles/home.css'


export default function ResponsiveGrid() {
    return (
    <div className="custom-wrapper"> 
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={ 12 }>
            <Grid item xs={12} md={6}>
            <PiePlot />  
            </Grid>
            <Grid item xs={12} md={6}>
            <PiePlot />  
            </Grid>
            </Grid>
            </Box>
    </div>
    );
};