import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PiePlot from './PiePlot';


export default function ResponsiveGrid() {
    return (
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
    );
  }