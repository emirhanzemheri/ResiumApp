import * as React from 'react';
import Map from './Map';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


export default function App(){

return(

<Box>   
 <Grid container spacing={2}>  


<Grid item xs={4}>
<Map/>
</Grid>
<Grid item xs={8}>
<Box/>
</Grid>




</Grid> 
</Box>
);



}