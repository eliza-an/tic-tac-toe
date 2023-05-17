import * as React from 'react';
import { styled } from '@mui/material/styles';
import './grid.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(7),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function MyGrid(){
return(
<Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 3, sm: 3, md: 12 }} className='wholething'>
  {Array.from(Array(9)).map((_, index) => (
    <Grid item xs={3} sm={4} md={4} key={index}>
      <Item className='sections'>xs=2</Item>
    </Grid>
  ))}
</Grid>

)
}
export default MyGrid;