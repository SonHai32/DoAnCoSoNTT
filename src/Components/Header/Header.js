import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme => ({
  root:{
    flexGrow: 1,
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#32a852'
  },
})))

const Header = ()=>{
  const classes = useStyle();

  return(
    <div className='my-header'>
          <Paper className={classes.paper}>xs=12</Paper>
    </div>  
  )
}

export default Header;

